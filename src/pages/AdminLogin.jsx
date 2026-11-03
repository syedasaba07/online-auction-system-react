import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
    if (username === 'jahnavi' && password === '12345') {
      localStorage.setItem('adminLoggedIn', 'true')
      alert('Admin login successful!')
      navigate('/admin')
    } else {
      alert('Invalid admin username or password.')
    }
  }

  return (
    <section className="hero">
      <h1>Admin Login</h1>
      <p>Login to manage the auction system.</p>
      <form onSubmit={submit}>
        <p><label>Admin Username</label><input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter admin username" required /></p>
        <p><label>Admin Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter admin password" required /></p>
        <button type="submit">Admin Login</button>
      </form>
    </section>
  )
}

export default AdminLogin
