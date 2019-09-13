const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const db = require('./db.json')

const app = new Koa()
const router = new Router()

router.get('/bond/:isin', async (ctx) => {
  const { isin } = ctx.params

  ctx.status = 200
  ctx.body = db[isin]
})

app.use(cors())
app.use(router.routes())

app.listen(3001)
