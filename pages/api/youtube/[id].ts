import axios from "axios"

const youtubeKey = process.env.NEXT_PUBLIC_YOUTUBE
const headers = {
  Authorization: `Bearer ${youtubeKey}`,
}

export default async function handler(req: any, res: any) {
  const id = req.query.id
  try {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC44hYgvELEwHYlWLy5JSAKA&key=${youtubeKey}`
    )
    res.status(200).json({ data: response.data, status: response.status })
  } catch (e) {
    console.log(e)
    res.send({ message: "Something went wrong, please try again" })
  }
}
