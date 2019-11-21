'use strict';

/**
 *
 * ---
 * @doc [获取 Application 对象](https://eggjs.org/zh-cn/basics/objects.html#获取方式)
 * ---
 */
module.exports = ({ router, controller }) => {
  router.post('/webhook', controller.webhook.webhook);
};
