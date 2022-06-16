import express from 'express'
import dotenv from 'dotenv'
import usuarioRouter from './routes/usuario.js'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.text())
app.use('/usuario', usuarioRouter)

app.listen(PORT, () => {
  console.log(`servidor levantado en -> http://localhost:${PORT}/`)
})
