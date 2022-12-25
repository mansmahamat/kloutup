import { supabase } from "../../utils/auth"

const handler = async (req, res) => {
  supabase.auth.api.setAuthCookie(req, res)
}

export default handler
