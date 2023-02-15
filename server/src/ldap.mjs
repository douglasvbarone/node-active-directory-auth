import { Client, InvalidCredentialsError } from 'ldapts'

const client = new Client({
  url: process.env.LDAP_URL || 'ldap://exemple.org'
})

const domain = process.env.LDAP_DOMAIN || 'DOMAIN'

export async function authenticate(username, password) {
  try {
    if (!username || !password) throw new Error('Missing credentials')

    await client.bind(`${domain}\\${username}`, password)
  } catch (error) {
    if (error instanceof InvalidCredentialsError)
      throw new Error('Invalid credentials')

    throw error // In case of other errors
  } finally {
    client.unbind() // Always unbind after bind
  }
}
