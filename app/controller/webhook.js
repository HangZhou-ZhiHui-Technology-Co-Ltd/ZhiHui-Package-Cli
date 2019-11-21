'use strict';
const { execFile } = require('child_process');

const nodemailer = require('nodemailer');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async webhook() {
    const { ctx } = this;
    execFile('./shell/deploy.sh', (error, stdout, stderr) => {
      if (error) {
        ctx.logger.error(`error: ${error}`);
        return;
      }
      const transporter = nodemailer.createTransport({
        host: 'smtp.163.com',
        service: '163',
        port: 25,
        secureConnection: true,
        auth: {
          user: '18457125447@163.com',
          pass: 'Wangyi163mail',
        },
      });
      transporter.sendMail({
        from: '"Fred Foo 👻" <18457125447@163.com>', // sender address
        to: 'chenqikang55@qq.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: `stdout: ${stdout}`, // html body
      });
      ctx.logger.info(`stdout: ${stdout}`);
      ctx.logger.error(`stderr: ${stderr}`);
    });
  }
}

module.exports = HomeController;
