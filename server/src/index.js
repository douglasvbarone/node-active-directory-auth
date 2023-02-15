require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { sign, verify } = require('jsonwebtoken')

const { authenticate } = require('./ldap')

const JWT_SECRET = process.env.JWT_SECRET || 'A_very_long_secret'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// The login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body

  try {
    await authenticate(username, password)

    const jwt = sign({ username }, JWT_SECRET)

    res.json({ jwt: `Bearer ${jwt}` })
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

  if (!authorization)
    return res.status(401).json({ error: 'No authorization header' })

  const [bearer, token] = authorization.split(' ')

  if (bearer !== 'Bearer')
    return res.status(401).json({ error: 'Invalid authorization header' })

  try {
    const { username } = verify(token, JWT_SECRET)

    res.json({ requestUser: username, data: 'Some protected data' })
  } catch (error) {
    res.status(401).json({ error: error.message })
  }
})

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`))
