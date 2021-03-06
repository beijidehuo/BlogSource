import proxy from 'http-proxy-middleware'
import c2k from 'koa2-connect'

export default () => {
  return async (ctx, next) => {
    if (ctx.origin === 'http://localhost:80') {
      proxy('/', {
        target: 'http://linhai.tech',
        changeOrigin: true,
      })
    } else {
      await next()
    }

  }
}
