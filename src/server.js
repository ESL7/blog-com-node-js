import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import routes from './router'

dotenv.config()

const server = express()
const port = process.env.PORT || 3000

mongoose.connect(
  `mongodb+srv://ezequiel:${process.env.DB_PASSWORD}@cluster0.mxvx8.mongodb.net/${process.env.DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

server.use(express.json())
server.use(routes)

server.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`)
})
