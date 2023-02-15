const { Client, InvalidCredentialsError } = require('ldapts')

const client = new Client({
  url: process.env.LDAP_URL || 'ldap://exemple.org'
})

const domain = process.env.LDAP_DOMAIN || 'DOMAIN'

async function authenticate(username, password) {
  try {
    await client.bind(`${domain}\\${username}`, password)
    return true
  } catch (err) {
    if (err instanceof InvalidCredentialsError)
      throw new Error('Invalid credentials')

    throw err
  } finally {
    client.unbind()
  }
}

module.exports = {
  authenticate
}
