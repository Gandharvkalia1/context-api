import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('is-authenticated') === 'true'

  if (!isAuthenticated) {
    return <Navigate replace to="/" />
  }

  return children
}
