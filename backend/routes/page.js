const router = require("koa-router")();
const pageService = require("../service/pageService");

router.post("/page/info", async (ctx, next) => {
  await pageService.info(ctx).then((ret) => {
    ctx.body = ret;
  });
});

module.exports = router;
