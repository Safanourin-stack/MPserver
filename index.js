const jsonSever=require('json-server')

const MPserver=jsonSever.create()

const router =jsonSever.router('db.json')

const middleware=jsonSever.defaults()

const PORT=3000||process.env.PORT

MPserver.use(middleware)
MPserver.use(router)
MPserver.listen(PORT,()=>console.log(`media player server running at${PORT}`))