import { Link } from 'react-router-dom'

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem('auctionUser') || 'null')
  return (
    <section className="hero">
      <h1>Welcome to Your Dashboard</h1>
      <p>{user?.name ? `Welcome, ${user.name}! ` : ''}Explore live auctions and participate by placing bids.</p>
      <div className="products">
        <div className="product">
          <h2>Live Auctions</h2>
          <p>View available products and place your bids.</p>
          <Link className="button-link" to="/auctions">View Auctions</Link>
        </div>
        <div className="product">
          <h2>My Bids</h2>
          <p>View the products you have bid on.</p>
          <Link className="button-link" to="/my-bids">View My Bids</Link>
        </div>
      </div>
    </section>
  )
}

export default UserDashboard
