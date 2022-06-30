
module.exports = {
  get: (s) => {
    if (!process.env.npm_config_argv) {
      return 'dev'
    }
    var argv = JSON.parse(process.env.npm_config_argv).cooked
    var sIndex = argv.indexOf(`--${s}`)
    if (sIndex === -1) {
      return ''
    }
    return argv[sIndex + 1]
  }
}