'use strict';

const Controller = require('egg').Controller;

class NextController extends Controller {
  async render() {
    const { app, ctx } = this;
    const { req, res } = ctx;
    return app.handle(req, res);
  }
}

module.exports = NextController;
