import "../styles/globals.css"
import "../styles/Fonts.css"
import "../styles/App.css"
import "../styles/Contact.css"
import { ChakraProvider } from "@chakra-ui/react"
import "react-calendar/dist/Calendar.css"
import "../styles/MiniCalendar.css"
import type { AppProps } from "next/app"
import theme from "../theme/theme"
import { AuthProvider } from "../utils/auth"
import { supabase } from "../utils/supabaseClient"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { StoreProvider } from "easy-peasy"
import { useStore } from "../utils/store"

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  const store = useStore(pageProps.ssrStoreState)
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <AuthProvider supabase={supabase}>
        <StoreProvider store={store}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </StoreProvider>
      </AuthProvider>
    </SessionContextProvider>
  )
}
