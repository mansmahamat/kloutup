import { TwitterApi } from "twitter-api-v2"

const client = new TwitterApi(
  "AAAAAAAAAAAAAAAAAAAAADq1hQEAAAAAnLH%2BTm1ADGfCLp2M9WCT7GNINSE%3DDgo9kPLszTtVzErv5DzS8Q1vZJwbgFE3extUUre8XpTlMW7BNk"
)

export default async function handler(req: any, res: any) {
  const user = req.query.user
  try {
    const userInfos = await client.v2.userByUsername(user, {
      "user.fields": [
        "profile_image_url",
        "description",
        "name",
        "id",
        "public_metrics",
      ],
    })
    res.status(200).json({ data: userInfos })
  } catch (e) {
    console.log(e)
    res.send({ message: e })
  }
}
