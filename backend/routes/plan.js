const router = require("koa-router")();


router.post("/plan/add", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

module.exports = router;
