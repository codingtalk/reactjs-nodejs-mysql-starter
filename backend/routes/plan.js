const router = require("koa-router")();

const planService = require("../service/planService");

router.post("/plan/add", async (ctx, next) => {
  await planService.add(ctx).then((ret) => {
    ctx.body = ret;
  });
});

module.exports = router;
