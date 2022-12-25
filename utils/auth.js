import { createContext, useContext, useEffect, useState } from "react"
import { setCookie } from "cookies-next"

export const AuthContext = createContext()

export const AuthProvider = ({ supabase, ...props }) => {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(supabase.auth.getUser())
  const [isAuth, setisAuth] = useState(user?.aud)

  useEffect(() => {
    const getUser = async () => {
      const activeSession = await supabase.auth.getSession()
      setSession(activeSession)
    }

    getUser()

    setCookie("session", session)

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT" || event === "USER_DELETED") {
          // delete cookies on sign out
          const expires = new Date(0).toUTCString()
          document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`
          document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
          document.cookie = `session=; path=/; expires=${expires}; SameSite=Lax; secure`
        } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
          const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
          document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
          document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
          document.cookie = `session=${session}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
        }
      }
    )

    return () => {
      authListener?.subscription?.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        isAuth,
        signOut: () => supabase.auth.signOut(),
      }}
      {...props}
    />
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
