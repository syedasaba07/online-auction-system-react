import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddAuction() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', startingBid: '', description: '' })
  const [image, setImage] = useState('')

  const submit = (event) => {
    event.preventDefault()
    if (!image) {
      alert('Please select a product image.')
      return
    }
    const auctions = JSON.parse(localStorage.getItem('auctions') || '[]')
    auctions.push({
      id: Date.now(),
      name: form.name,
      startingBid: Number(form.startingBid),
      currentBid: Number(form.startingBid),
      description: form.description,
      image,
    })
    localStorage.setItem('auctions', JSON.stringify(auctions))
    alert('Auction added successfully!')
    navigate('/admin')
  }

  const readImage = (file) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = event => setImage(event.target.result)
    reader.readAsDataURL(file)
  }

  return (
    <section className="hero">
      <h1>Add New Auction</h1>
      <p>Create a new auction item for users.</p>
      <form onSubmit={submit}>
        <p><label>Product Name</label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter product name" required /></p>
        <p><label>Starting Bid</label><input type="number" min="1" value={form.startingBid} onChange={e => setForm({ ...form, startingBid: e.target.value })} placeholder="Enter starting bid" required /></p>
        <p><label>Auction Description</label><input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Enter product description" required /></p>
        <p><label>Product Image</label><input type="file" accept="image/*" onChange={e => readImage(e.target.files[0])} required /></p>
        <button type="submit">Add Auction</button>
      </form>
    </section>
  )
}

export default AddAuction
