import axios from "axios"

const tiktokKey = process.env.NEXT_PUBLIC_TIKTOK
const headers = {
  "X-RapidAPI-Host": "tiktok-scraper2.p.rapidapi.com",
  "X-RapidAPI-Key": tiktokKey,
}

export default async function handler(req: any, res: any) {
  const id = req.query.id
  try {
    const response = await axios.get(
      `https://tiktok-scraper2.p.rapidapi.com/user/info?user_name=mans_js`,
      { headers }
    )
    res.status(200).json({ data: response.data })
  } catch (e) {
    console.log(e)
    res.send({ message: "Something went wrong, please try again" })
  }
}
