import koaRouter from 'koa-router'
const router = koaRouter()
import send from 'koa-send'
import path from 'path'

export default app => {
  // 用户请求
  router.all('/*', async (ctx, next) => {
    // TODO::有的浏览器会是ctx.header
    let { referer } = ctx.request.header;

    if (referer) {
      const parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
      const url = referer;
      const urlResult = parse_url.exec(url);
      const fields = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
      const resField = [];
      fields.forEach(function (field, i) {
        resField[field] = urlResult[i];
      });
      let origin = resField.scheme + "://" + resField.host;
      if (resField.port) {
        origin += ":" + resField.port;
      }

      ctx.set("Access-Control-Allow-Origin", origin);
      ctx.set("Access-Control-Allow-Credentials", "true");
    } else {
      ctx.set("Access-Control-Allow-Origin", "*");
    }

    ctx.set("Access-Control-Allow-Headers", 'Content-Type,Content-Length, Authorization,\'Origin\',Accept,X-Requested-With');
    ctx.set("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    await next();
  });
  // api
  let apiRouter = require('./routes/api').default
  router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())

  // 静态文件访问
  let adminRouter = require('./routes/admin').default,
    clientRouter = require('./routes/client').default
  router.use('', adminRouter.routes(), clientRouter.routes(), adminRouter.allowedMethods())

  app.use(router.routes()).use(router.allowedMethods())
}