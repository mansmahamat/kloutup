import TwitchApi from "node-twitch"

const clientSecret = process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET
const clientId = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID

const twitch = new TwitchApi({
  //@ts-ignore
  client_id: clientId,
  //@ts-ignore

  client_secret: clientSecret,
})

export default async function handler(req: any, res: any) {
  const username = req.query.user
  try {
    const users = await twitch.getUsers(username)
    const user = users.data[0]
    res.status(200).json({ data: user })
  } catch (e) {
    console.log(e)
    res.send({ message: e })
  }
}
