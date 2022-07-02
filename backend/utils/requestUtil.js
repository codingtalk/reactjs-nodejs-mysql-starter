const exceptionUtil = require("./exceptionUtil");

const requestUtil = {
  getQueryValue: (ctx, k) => {
    const v = ctx.query[k];
    if (!v) {
      exceptionUtil.throwBizError(`参数： ${k}不能为空`);
    }
    return v;
  },
  getBodyValue: (ctx, k) => {
    if (!k) {
      return ctx.request.body;
    }
    const v = ctx.request.body[k];
    if (!v) {
      exceptionUtil.throwBizError(`body： ${k}不能为空`);
    }
    return v;
  },
};

module.exports = requestUtil;
