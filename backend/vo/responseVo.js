class ResponseVo {
  code = 5000;
  msg = "服务器错误";
  data = null;

  ok(data) {
    this.code = 2000;
    this.msg = "响应正确";
    this.data = data;
  }
}

module.exports = ResponseVo;