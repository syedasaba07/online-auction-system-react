import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ type }) {
  const allowed = type === 'admin'
    ? localStorage.getItem('adminLoggedIn') === 'true'
    : localStorage.getItem('isLoggedIn') === 'true'

  if (!allowed) {
    return <Navigate to={type === 'admin' ? '/admin-login' : '/login'} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
