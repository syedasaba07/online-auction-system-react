import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AuctionCard from '../components/AuctionCard'

function AdminDashboard() {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    setAuctions(JSON.parse(localStorage.getItem('auctions') || '[]'))
  }, [])

  const deleteAuction = (id) => {
    const updated = auctions.filter(auction => auction.id !== id)
    localStorage.setItem('auctions', JSON.stringify(updated))
    setAuctions(updated)
    alert('Auction deleted successfully!')
  }

  return (
    <section className="hero">
      <h1>Admin Dashboard</h1>
      <p>Add and manage auction products.</p>
      <Link className="button-link" to="/add-auction">Add New Auction</Link>
      <h2 className="section-title">Manage Auctions</h2>
      <div className="products">
        {auctions.length === 0 ? <p>No auction items added yet.</p> : auctions.map(auction => <AuctionCard key={auction.id} auction={auction} onDelete={deleteAuction} />)}
      </div>
    </section>
  )
}

export default AdminDashboard
