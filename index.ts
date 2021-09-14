/*
 * @Version: 0.0.0.1
 * @LastEditor: Kian
 * @Date: 2021-09-14 16:04:11
 * @LastEditTime: 2021-09-14 17:15:32
 */
import Koa from "koa";
import router from './routers/index'
import { koaSwagger } from 'koa2-swagger-ui';
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

const app: Koa = new Koa();

app.use(bodyParser())
app.use(cors());

app.use(router.routes());
app.use(router.allowedMethods());

// app.use((ctx: Koa.DefaultContext) => {
//   console.log(ctx.request.body)
//   console.log("hello")

//   ctx.body = "hello world123！";
// })


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

const port: number = 3030;
app.listen(port, () => {
  console.log(`seccess start server`)
  console.log(`local: http://127.0.0.1:${port}`)
})
