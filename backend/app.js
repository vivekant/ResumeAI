import express from 'express'
import userRouter from './router/route.js'
import cors from 'cors'
const app = express()
app.use(cors())



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/vivedhara/v1/dss', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/vivedhara/v1/dss',userRouter)

app.post('/dhara', (req, res) => {
  console.log(req.body)
  res.send('Hello World!')
})

export default app
