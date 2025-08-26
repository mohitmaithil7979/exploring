import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="font-bold text-xl">CampusTrade</Link>
        <nav className="ml-auto hidden md:flex items-center gap-4 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-600'}>Home</NavLink>
          <NavLink to="/create" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-600'}>Create Listing</NavLink>
          <NavLink to="/chat" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-600'}>Messages</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-600'}>Dashboard</NavLink>
              <button onClick={logout} className="rounded-md bg-black text-white px-3 py-1">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => isActive ? 'text-black' : 'text-gray-600'}>Login</NavLink>
              <NavLink to="/signup" className="rounded-md bg-black text-white px-3 py-1">Sign up</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar