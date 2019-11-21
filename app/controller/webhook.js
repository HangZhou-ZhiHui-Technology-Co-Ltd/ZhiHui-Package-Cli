'use strict';
const { execFile } = require('child_process');

const nodemailer = require('nodemailer');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async webhook() {
    execFile('./shell/deploy.sh', (error, stdout, stderr) => {
      const html = error || stderr || stdout;
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
        from: '"Fred Foo 👻" <18457125447@163.com>',
        to: 'chenqikang55@qq.com',
        subject: '构建通知',
        html,
      });
    });
  }
}

module.exports = HomeController;
