import axios from "axios"

const twitterKey = process.env.NEXT_PUBLIC_TWITTER
const headers = {
  Authorization: `Bearer ${twitterKey}`,
}

export default async function handler(req: any, res: any) {
  const id = req.query.id
  try {
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/${id}?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`,
      { headers }
    )
    res.status(200).json({ data: response.data, status: response.status })
  } catch (e) {
    res.send({ message: "Something went wrong, please try again" })
  }
}
