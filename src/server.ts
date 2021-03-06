import express from 'express'
import '@controllers/UsersController'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello, world!' })
})

app.listen(3333, () => {
  console.log('listening on port 3333 🔥')
})
