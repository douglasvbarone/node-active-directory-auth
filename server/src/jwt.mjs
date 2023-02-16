import jsonwebtoken from 'jsonwebtoken'

const { sign, verify } = jsonwebtoken

const JWT_SECRET = process.env.JWT_SECRET || 'A_very_long_secret'

export function generateToken(username) {
  const jwt = sign({ username }, JWT_SECRET)

  return `Bearer ${jwt}`
}

export function validateToken(authorization) {
  if (!authorization) throw new Error('Missing authorization header')

  const [scheme, token] = authorization.split(' ')

  if (scheme !== 'Bearer') throw new Error('Invalid authorization scheme')

  try {
    const { username } = verify(token, JWT_SECRET)

    return username
  } catch (error) {
    throw new Error('Invalid token')
  }
}
