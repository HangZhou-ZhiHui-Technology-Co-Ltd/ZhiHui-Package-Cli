'use strict';
// const { exec } = require('child_process');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async webhook() {
    const { ctx } = this;
    // ctx.logger.info('=====================');
    // exec('./shell/deploy.sh', (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`执行的错误: ${error}`);
    //     return;
    //   }
    //   console.log(`stdout: ${stdout}`);
    //   console.error(`stderr: ${stderr}`);
    // });
    ctx.body = 'Hello World';
  }
}

module.exports = HomeController;
