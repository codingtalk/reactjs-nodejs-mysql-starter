const defaultConfig = {
    isUp2sever: false,
    url: ''
}
export default class Log4js {
    config = {}

    constructor(config) {
        this.config = Object.assign(defaultConfig, config)
    }

    debug(e) {
        const prefix = `%c
  //     __  __     ____         _       __           __    __
  //    / / / /__  / / /___     | |     / /___  _____/ /___/ /
  //   / /_/ / _ \/ / / __ \    | | /| / / __ \/ ___/ / __  / 
  //  / __  /  __/ / / /_/ /    | |/ |/ / /_/ / /  / / /_/ /  
  // /_/ /_/\___/_/_/\____/     |__/|__/\____/_/  /_/\__,_/   
  //                                             
        `
        const suffix = `%c
  //
  // =======================================================
  //
        `
        console.log(prefix, 'color: blue')
        console.log(e)
        console.log(suffix, 'color: red')
    }

    log(e) {
        console.log(`%c ------------- power by log4js, log start -----------`, 'color: blue')
        console.log(e)
        console.log(`%c ------------- power by log4js, log end -----------`, 'color: red')
    }

    error(e) {
        console.log(`%c ------------- power by log4js, log start -----------`, 'color: blue')
        throw e
        console.log(`%c ------------- power by log4js, log end -----------`, 'color: red')
    }
}