const exceptionUtil = require("./exceptionUtil");

const requestUtil = {
  getQueryValue: (ctx, k) => {
    const v = ctx.query[k];
    if (!v) {
      exceptionUtil.throwBizError(`参数： ${k}不能为空`);
    }
    return v;
  },
};

module.exports = requestUtil;
