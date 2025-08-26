import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type User = { id: string; name: string; email: string }

type AuthContextValue = {
  user: User | null
  login: (u: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const value = useMemo<AuthContextValue>(() => ({
    user,
    login: (u) => setUser(u),
    logout: () => setUser(null),
  }), [user])

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuthContext() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider')
  return ctx
}