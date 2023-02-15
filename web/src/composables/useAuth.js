import { ref, onMounted } from 'vue'

const LOGIN_URL = 'http://localhost:3000/api/login'

const token = ref(null)
const user = ref(null)
const error = ref(null)

export function useAuth() {
  async function login(username, password) {
    logout()
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      const data = await response.json()

      if (data.error) error.value = data.error
      else {
        user.value = username
        token.value = data.token
        error.value = null

        localStorage.setItem('token', data.token)
        localStorage.setItem('user', username)
      }
    } catch (error) {
      throw error
    }
  }

  async function logout() {
    user.value = null
    token.value = null
    error.value = null

    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  onMounted(() => {
    const storageToken = localStorage.getItem('token')
    const storageUser = localStorage.getItem('user')

    if (storageToken && storageUser) {
      token.value = storageToken
      user.value = storageUser
    }
  })

  return { token, user, login, logout, error }
}
