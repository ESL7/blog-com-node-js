import express, { request, response } from 'express'

const routes = express.Router()

routes.get('/', (request, response) => {
  response.status(201).json({ message: 'Helo World!!!' })
})

export default routes
