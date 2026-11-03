import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const savedUser = JSON.parse(localStorage.getItem('auctionUser') || 'null')
    if (!savedUser) {
      alert('No account found. Please register first.')
      return
    }
    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem('isLoggedIn', 'true')
      alert('Login successful!')
      navigate('/dashboard')
    } else {
      alert('Invalid email or password.')
    }
  }

  return (
    <section className="hero">
      <h1>User Login</h1>
      <p>Login to access the auction system.</p>
      <form onSubmit={submit}>
        <p><label>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required /></p>
        <p><label>Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" required /></p>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Create Account</Link></p>
    </section>
  )
}

export default Login
