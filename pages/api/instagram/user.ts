import axios from "axios"
//@ts-ignore
import Instagram from "instagram-web-api"

export default async function handler(req: any, res: any) {
  const id = req.query.id
  try {
    const a = "issadkr"
    const b = "Montpellier"
    const client = new Instagram({ a, b })
    const instagram = await client.getUserByUsername({ username: "instagram" })
    console.log(instagram)
    res.status(200).json({ data: instagram })
  } catch (e) {
    console.log(e)
    res.send({ message: "Something went wrong, please try again" })
  }
}
