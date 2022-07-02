const ResponseVo = require("../vo/responseVo");
const requestUtil = require("../utils/requestUtil");
const plan = require("../db/entity/plan");

const planService = {
    add: async (ctx) => {
        const responseVo = new ResponseVo();
        plan.create({
            member_id: 1,
            type_id: requestUtil.getBodyValue(ctx, "type_id")
        })
        responseVo.ok("operation ok");
        return responseVo;
    },
};

module.exports = planService;
