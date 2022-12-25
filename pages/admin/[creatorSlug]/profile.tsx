// Chakra imports
import { Box, Button, Grid } from "@chakra-ui/react"
import AdminLayout from "../../../layouts/admin/index"
import { createServerSupabaseClient, User } from "@supabase/auth-helpers-nextjs"
// Custom components
import Banner from "../../../views/admin/profile/components/Banner"
import General from "../../../views/admin/profile/components/General"
import Notifications from "../../../views/admin/profile/components/Notifications"
import Projects from "../../../views/admin/profile/components/Projects"
import Storage from "../../../views/admin/profile/components/Storage"
import Upload from "../../../views/admin/profile/components/Upload"

// Assets
import banner from "../../../assets/img/auth/banner.png"
import avatar from "../../../assets/img/avatars/avatar4.png"

import { useEffect, useRef, useState } from "react"
import ImageUploading, { ImageListType } from "react-images-uploading"
import Image from "next/image"
import { useRouter, Router } from "next/router"
import { supabase } from "../../../utils/supabaseClient"
import ModalAddLink from "../../../components/modalAddLink/ModalAddLink"
import { useAuth } from "../../../utils/auth"
import {
  GetServerSidePropsContext,
  PreviewData,
  NextApiRequest,
  NextApiResponse,
} from "next"
import { ParsedUrlQuery } from "querystring"
import { serviceSupa } from "../../../utils/helper"
import { getCookie } from "cookies-next"
import { middleware } from "../../../utils/middleware"

export default function ProfileOverview({ user, links }: any) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [userId, setUserId] = useState<string | undefined>()
  const [title, setTitle] = useState<string | undefined>()
  const [username, setUsername] = useState<string | undefined>()
  const [url, setUrl] = useState<string | undefined>()
  const [open, setOpen] = useState(false)
  const [images, setImages] = useState<ImageListType>([])
  const [profilePictureUrl, setProfilePictureUrl] = useState<
    string | undefined
  >()
  const router = useRouter()
  const { signOut } = useAuth()
  const { creatorSlug } = router.query

  console.log("error: ", user)

  return (
    <>
      <AdminLayout>
        <ModalAddLink setOpen={setOpen} open={open} />
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
          {/* Main Fields */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1fr 1.62fr",
            }}
            templateRows={{
              base: "repeat(3, 1fr)",
              lg: "1fr",
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Button onClick={() => signOut()}>Loug out</Button>
            <Banner
              gridArea="1 / 1 / 2 / 2"
              banner={banner}
              avatar={
                profilePictureUrl
                  ? profilePictureUrl
                  : "https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              name="Mansour"
              job="Frontend Developer"
              posts="17"
              followers="9.7k"
              following="274"
            />
            <Storage
              gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
              used={50}
              total={50}
              setOpen={setOpen}
            />
            <Upload
              gridArea={{
                base: "3 / 1 / 4 / 2",
                lg: "1 / 3 / 2 / 4",
              }}
              minH={{ base: "auto", lg: "420px", "2xl": "365px" }}
              pe="20px"
              pb={{ base: "100px", lg: "20px" }}
            />
          </Grid>
          <Grid
            mb="20px"
            templateColumns={{
              base: "1fr",
              lg: "repeat(2, 1fr)",
              "2xl": "1.34fr 1.62fr 1fr",
            }}
            templateRows={{
              base: "1fr",
              lg: "repeat(2, 1fr)",
              "2xl": "1fr",
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Projects
              banner={banner}
              avatar={avatar}
              userId={userId}
              links={links}
              name="Adela Parkson"
              job="Product Designer"
              posts="17"
              followers="9.7k"
              following="274"
            />
            <General
              gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
              minH="365px"
              pe="20px"
            />
            <Notifications
              used={25.6}
              total={50}
              gridArea={{
                base: "3 / 1 / 4 / 2",
                lg: "2 / 1 / 3 / 3",
                "2xl": "1 / 3 / 2 / 4",
              }}
            />
          </Grid>
        </Box>
      </AdminLayout>
    </>
  )
}

export const getServerSideProps = async ({ req, params }: any) => {
  // const supabase = createServerSupabaseClient(ctx)
  // // Check if we have a session
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  //let supabase = createClient(supabaseUrl, supabaseKey);
  let token = req.cookies["my-access-token"]

  let authRequestResult = await fetch(
    `https://fwyhrzyvairfoptielok.supabase.co/auth/v1/user`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        APIKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3eWhyenl2YWlyZm9wdGllbG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0ODIxNzMsImV4cCI6MTk4NzA1ODE3M30.UAD6inut1ch8edFDM00zoYkFqBcklFBvZhIiyEhbpuI",
      },
    }
  )

  let result = await authRequestResult.json()
  const userId = result.id

  const { data, error } = await supabase.from("users").select().eq("id", userId)
  if (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
  const username = data[0]?.username || ""
  const infos = data[0]
  const userInfos = [{ ...result, ...infos }]
  const { creatorSlug } = params

  const { data: linksData } = await supabase
    .from("links")
    .select("*")
    .eq("user_id", userId)

  console.log(linksData)

  if (username !== creatorSlug) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { user: userInfos, links: linksData },
  }
}
