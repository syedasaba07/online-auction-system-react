import { Link, useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
  const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true'

  const logout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/')
  }

  const adminLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    navigate('/')
  }

  const adminPage = location.pathname.startsWith('/admin') || location.pathname === '/add-auction'

  return (
    <>
      <header>
        <h1>Online Auction System</h1>
        <p>{adminPage ? 'Admin Panel' : 'Bid. Win. Own.'}</p>
      </header>

      <nav>
        {adminLoggedIn ? (
          <>
            <Link to="/admin">Admin Dashboard</Link>
            <Link to="/add-auction">Add Auction</Link>
            <button className="nav-button" onClick={adminLogout}>Logout</button>
          </>
        ) : loggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/auctions">Live Auctions</Link>
            <Link to="/my-bids">My Bids</Link>
            <button className="nav-button" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/admin-login">Admin</Link>
          </>
        )}
      </nav>
    </>
  )
}

export default Header
