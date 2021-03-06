const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
var cors = require('koa-cors');
let log4js = require('log4js')

const routeIndex = require('./routes/index')
const routePage = require('./routes/page')
const routePlan = require('./routes/plan')

log4js.configure({
  appenders: {
    file: {
      type: 'file',
      filename: './.logs/app.log',
      layout: {
        type: 'pattern',
        pattern: '%r %p - %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['file'],
      level: 'debug'
    }
  }
})

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// cors
app.use(cors())

// routes
app.use(routeIndex.routes(), routeIndex.allowedMethods());
app.use(routePage.routes(), routePage.allowedMethods());
app.use(routePlan.routes(), routePlan.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
