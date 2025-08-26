import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link to="/" className="font-semibold text-lg tracking-tight">CampusTrade</Link>
        <nav className="ml-auto hidden md:flex items-center gap-2 text-sm">
          <NavLink to="/" className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>Home</NavLink>
          <NavLink to="/create" className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>Create</NavLink>
          <NavLink to="/chat" className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>Messages</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>Dashboard</NavLink>
              <button onClick={logout} className="rounded-md bg-neutral-900 text-white px-3 py-1">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? 'text-neutral-900' : 'text-neutral-500'}`}>Login</NavLink>
              <NavLink to="/signup" className="rounded-md bg-neutral-900 text-white px-3 py-1">Sign up</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar