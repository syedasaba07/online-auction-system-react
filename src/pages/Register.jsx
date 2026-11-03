import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const submit = (event) => {
    event.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    const user = { name: form.name, email: form.email, password: form.password }
    localStorage.setItem('auctionUser', JSON.stringify(user))
    alert('Registration successful!')
    navigate('/login')
  }

  return (
    <section className="hero">
      <h1>Create Your Account</h1>
      <p>Register to participate in online auctions.</p>
      <form onSubmit={submit}>
        <p><label>Full Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" required /></p>
        <p><label>Email</label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Enter your email" required /></p>
        <p><label>Password</label><input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Create a password" required /></p>
        <p><label>Confirm Password</label><input type="password" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} placeholder="Confirm your password" required /></p>
        <button type="submit">Create Account</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </section>
  )
}

export default Register
