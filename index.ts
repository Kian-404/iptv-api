/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:04:11
 * @LastEditTime: 2021-09-16 17:09:31
 */
import Koa from "koa";
import router from './routers/index'
import { koaSwagger } from 'koa2-swagger-ui';
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
const { accessLogger } = require('./config/logger')

const app: Koa = new Koa();


app.use(accessLogger())

app.use(bodyParser())
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());


app.use(
  koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: '/swagger.json', // example path to json
      showRequestHeaders: true,
      layout: "StandaloneLayout",
      docExpansion: "none",
    },
    exposeSpec: true,
    hideTopbar: true
  }),
);
const port = process.env.PORT || 3030;
const host = process.env.HOST || "http://localhost"
app.listen(port, () => {
  console.log(`seccess start server`)
  console.log(`local: ${host}:${port}`)
})

module.exports = app