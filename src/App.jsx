import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserDashboard from './pages/UserDashboard'
import Auctions from './pages/Auctions'
import MyBids from './pages/MyBids'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import AddAuction from './pages/AddAuction'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute type="user" />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/my-bids" element={<MyBids />} />
        </Route>

        <Route element={<ProtectedRoute type="admin" />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/add-auction" element={<AddAuction />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
