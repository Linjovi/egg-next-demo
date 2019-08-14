/* eslint-disable strict */
const withCss = require('@zeit/next-css');
const next = require('next');
const nextApp = next({
  dev: true,
  ...withCss(),
});
const handle = nextApp.getRequestHandler();
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async willReady() {
    nextApp.prepare().then(() => {
      this.app.next = nextApp;
      this.app.handle = handle;
    });
  }
}
module.exports = AppBootHook;
// app => {
//   app.beforeStart(async () => {
//     nextApp.prepare().then(() => {
//       app.next = nextApp;
//       app.handle = handle;
//     });
//   });
// };
