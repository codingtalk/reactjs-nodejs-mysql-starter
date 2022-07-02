const ResponseVo = require("../vo/responseVo");
const requestUtil = require("../utils/requestUtil");
const exceptionUtil = require("../utils/exceptionUtil");
const planType = require("../db/entity/planType");
const planChecklist = require("../db/entity/planChecklist");

const pageService = {
  info: async (ctx) => {
    const responseVo = new ResponseVo();
    const keyLimitType = ["planChoose", "index"];
    let dataJson = {
    }
    const key = requestUtil.getQueryValue(ctx, "key");
    if (!keyLimitType.includes(key)) {
      exceptionUtil.throwBizError(`非法key: ${key}`);
    }
    switch (key) {
      case "planChoose":
        dataJson = {
          planTypeList: await planType.findAll(),
          planChecklist: await planChecklist.findAll()
        }
        break;
      default:
        break;
    }
    responseVo.ok(dataJson);
    return responseVo;
  },
};

module.exports = pageService;
