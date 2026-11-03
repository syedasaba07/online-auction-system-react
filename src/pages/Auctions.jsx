import { useEffect, useState } from 'react'
import AuctionCard from '../components/AuctionCard'

function Auctions() {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    setAuctions(JSON.parse(localStorage.getItem('auctions') || '[]'))
  }, [])

  const placeBid = (auction) => {
    const value = prompt(`Enter your bid for ${auction.name}\nCurrent Bid: ₹${auction.currentBid}`)
    if (value === null) return
    const bid = Number(value)
    if (!Number.isFinite(bid) || bid <= auction.currentBid) {
      alert(`Your bid must be higher than ₹${auction.currentBid}`)
      return
    }

    const updated = auctions.map(item => item.id === auction.id ? { ...item, currentBid: bid } : item)
    localStorage.setItem('auctions', JSON.stringify(updated))
    const myBids = JSON.parse(localStorage.getItem('myBids') || '[]')
    myBids.push({ product: auction.name, bidAmount: bid, date: new Date().toLocaleString() })
    localStorage.setItem('myBids', JSON.stringify(myBids))
    setAuctions(updated)
    alert(`Bid placed successfully!\n\nProduct: ${auction.name}\nYour Bid: ₹${bid}`)
  }

  return (
    <section className="hero">
      <h1>Live Auctions</h1>
      <p>Choose a product and place your bid.</p>
      <div className="products">
        {auctions.length === 0 ? <p>No live auctions available.</p> : auctions.map(auction => <AuctionCard key={auction.id} auction={auction} onBid={placeBid} />)}
      </div>
    </section>
  )
}

export default Auctions
