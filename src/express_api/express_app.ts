import express from 'express'
import router  from './routes/todo_routes'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(router)

app.get('/',(req, res)=>{
    res.send('Hello World!')
})

app.listen(3000)