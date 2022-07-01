const ResponseVo = require("../vo/responseVo");
const requestUtil = require("../utils/requestUtil");
const exceptionUtil = require("../utils/exceptionUtil");
const planType = require("../db/entity/planType");
const planChecklist = require("../db/entity/planChecklist");

const KEY_LIMIT_TYPE = ["planChoose", "index"];

const _planChoose = async () => {
  const responseVo = new ResponseVo();
  const dataJson = {
    planTypeList: [],
    palnChecklist: [],
  };
  dataJson.planTypeList = await planType.findAll();
  dataJson.palnChecklist = await planChecklist.findAll();
  responseVo.ok(dataJson);
  return responseVo;
};

const pageService = {
  info: (ctx) => {
    const key = requestUtil.getQueryValue(ctx, "key");
    if (!KEY_LIMIT_TYPE.includes(key)) {
      exceptionUtil.throwBizError(`非法key: ${key}`);
    }
    if (key === "planChoose") {
      return _planChoose();
    }
  },
};

module.exports = pageService;
