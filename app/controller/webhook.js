'use strict';
const { exec } = require('child_process');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async webhook() {
    const { ctx } = this;
    ctx.logger.info('=====================');
    exec('./shell/deploy.sh', (error, stdout, stderr) => {
      if (error) {
        ctx.logger.error(`error: ${error}`);
        return;
      }
      ctx.logger.info(`stdout: ${stdout}`);
      ctx.logger.error(`stderr: ${stderr}`);
    });
  }
}

module.exports = HomeController;
