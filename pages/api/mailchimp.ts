//@ts-ignore
import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us10", // E.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
  req: { body: { email: any } },
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: { (arg0: { error: any }): any; new (): any }
    }
  }
) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: "Email is required" })
  }

  try {
    const test = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: "subscribed",
      }
    )
    return res.status(201).json({ error: "" })
  } catch (error) {
    //@ts-ignore
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
