'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async render() {
    const { app, ctx } = this;
    const { req, res } = ctx;
    ctx.body = await app.next.render(req, res, '/index');
  }
}

module.exports = IndexController;
