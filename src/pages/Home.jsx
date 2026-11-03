import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <h1>Welcome to Our Online Auction Platform</h1>
      <p>Discover products, participate in auctions, and place your bids online.</p>
      <Link className="button-link" to="/login">Login to Start Bidding</Link>
    </section>
  )
}

export default Home
