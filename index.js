import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.text())

app.get('/', (_, res) => {
  return res.send({ message: 'hola 👋' })
})

app.post('/', (req, res) => {
  return res.status(201).send(req.body)
})

app.listen(PORT, () => {
  console.log(`servidor levantado en -> http://localhost:${PORT}/`)
})
