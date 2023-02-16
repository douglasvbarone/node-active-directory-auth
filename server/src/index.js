import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { randomUUID } from 'crypto'

import { authenticate } from './ldap.mjs'
import { generateToken, validateToken } from './jwt.mjs'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// The login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body

  try {
    await authenticate(username, password)

    const token = generateToken(username)
    res.json({ token })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
})

// A public route. Anyone can access it.
app.get('/api/public', (req, res) => {
  res.json({ data: 'Some public data' })
})

// A protected route. Only authenticated users can access it.
app.get('/api/protected', async (req, res) => {
  const { authorization } = req.headers

  try {
    const username = validateToken(authorization)

    res.json({
      data: `Some protected data for ${username}. Rand: ${randomUUID()}`
    })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
})

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`))
