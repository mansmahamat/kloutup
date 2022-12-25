import { UserResponse } from "@supabase/supabase-js"
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next"
import type { NextApiRequest, NextApiResponse } from "next"
import { supabase } from "../../utils/supabaseClient"

export default async function getUser(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { user: UserResponse }): any; new (): any }
    }
  }
) {
  const refreshToken = req.cookies["my-access-token"]
  const user = await supabase.auth.getUser(refreshToken)
  return res.status(200).json({ user: user })
}
