import { useEffect, useState } from "react"
import ImageUploading, { ImageListType } from "react-images-uploading"
import Image from "next/image"
import { useRouter } from "next/router"
import { supabase } from "../../utils/supabaseClient"
import { profile } from "console"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image as ChakraImage,
  Flex,
  useColorModeValue,
  Icon,
  DarkMode,
  Badge,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react"
import { MdPeople } from "react-icons/md"
import { IoEllipsisHorizontalSharp } from "react-icons/io5"
import { ImEarth } from "react-icons/im"
import { TikTok } from "react-tiktok"
import Draggable from "react-draggable"
import { TwitterApi } from "twitter-api-v2"
import TwitterProfileCard from "../../components/twitterProfileCard/TwitterProfileCard"
import NewsletterCard from "../../components/newsletterCard/NewsletterCard"
import TweetPostCard from "../../components/tweetPostCard/TweetPostCard"
import useSWR from "swr"
import TwitchProfileCard from "../../components/twitchProfileCard/TwitchProfileCard"
import YoutubeProfileCard from "../../components/youtubeProfileCard/YoutubeProfileCard"
import tiktok from "tiktok-app-api"
import TiktokProfileCard from "../../components/tiktokProfileCard/TiktokProfileCard"
import InstagramProfileCard from "../../components/instagramProfileCard/InstagramProfileCard"

type Link = {
  title: string
  url: string
  socials: string
  type: string
  username: string
}

type Twitch = {
  description: string
  display_name: string
  profile_image_url: string
  view_count: number
}

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [userId, setUserId] = useState<string | undefined>()
  const [userInfos, setUserInfos] = useState()
  const [title, setTitle] = useState<string | undefined>()
  const [url, setUrl] = useState<string | undefined>()
  const [twitchData, setTwitchData] = useState<Twitch>()
  const [links, setLinks] = useState<Link[]>()
  const [images, setImages] = useState<ImageListType>([])
  const [profilePictureUrl, setProfilePictureUrl] = useState<
    string | undefined
  >()
  const router = useRouter()
  const { creatorSlug } = router.query
  let boxBg = useColorModeValue("white !important", "#111c44 !important")
  let mainText = useColorModeValue("gray.800", "white")
  let secondaryText = useColorModeValue("gray.400", "gray.400")
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200")
  let iconColor = useColorModeValue("brand.200", "white")

  const iframe_container = {
    left: 0,
    width: "100%",
    height: 500,
    position: "relative",
  }

  const iframe = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    border: 0,
  }

  const onChange = (imageList: ImageListType) => {
    setImages(imageList)
  }

  useEffect(() => {
    const getLinks = async () => {
      try {
        const { data, error } = await supabase
          .from("links")
          .select()
          .eq("user_id", userId)

        if (error) throw error

        setLinks(data)
      } catch (error) {
        console.log("error: ", error)
      }
    }
    if (userId) {
      getLinks()
    }
  }, [userId])

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("username", creatorSlug)
        if (error) throw error
        const profilePictureUrl = data[0]["profile_picture_url"]
        const userId = data[0]["id"]
        const userInfos = data[0]
        setProfilePictureUrl(profilePictureUrl)
        setUserId(userId)
        setUserInfos(userInfos)
      } catch (error) {
        console.log("error: ", error)
      }
    }

    if (creatorSlug) {
      getUser()
    }
  }, [creatorSlug])

  const addNewLink = async () => {
    try {
      if (title && url && userId) {
        const { data, error } = await supabase
          .from("links")
          .insert({
            title: title,
            url: url,
            user_id: userId,
          })
          .select()
        if (error) throw error
        console.log("data: ", data)
        if (links) {
          setLinks([...data, ...links])
        }
      }
    } catch (error) {
      console.log("error: ", error)
    }
  }

  console.log("HELLo", userInfos, userId)

  const uploadProfilePicture = async () => {
    try {
      if (images.length > 0) {
        const image = images[0]
        if (image.file && userId) {
          const { data, error } = await supabase.storage
            .from("public")
            .upload(`${userId}/${image.file.name}`, image.file, {
              upsert: true,
            })
          if (error) throw error
          const resp = supabase.storage.from("public").getPublicUrl(data.path)
          const publicUrl = resp.data.publicUrl
          const updateUserReponse = await supabase
            .from("users")
            .update({ profile_picture_url: publicUrl })
            .eq("id", userId)
          if (updateUserReponse.error) throw error
        }
      }
    } catch (error) {
      console.log("error: ", error)
    }
  }
  const id = "UC44hYgvELEwHYlWLy5JSAKA"
  // const { data: youtubeInfos, error } = useSWR(`/api/youtube/${id}`, fetcher)

  //const { data: tiktokInfos, error } = useSWR(`/api/tiktok/user`, fetcher)
  // console.log(tiktokInfos)

  return (
    // <div className="flex flex-col w-full justify-center items-center mt-4">
    //   {profilePictureUrl && (
    //     <Image
    //       src={profilePictureUrl}
    //       alt="profile-picture"
    //       height={150}
    //       width={150}
    //       // change to suit your needs
    //       className="rounded-full" //
    //     />
    //   )}
    //   {links?.map((link: Link, index: number) => (
    //     <div
    //       className="shadow-xl w-96 bg-purple-400 mt-4 p-4 rounded-lg text-center text-white"
    //       key={index}
    //       onClick={(e) => {
    //         e.preventDefault()
    //         window.location.href = link.url
    //       }}
    //     >
    //       {link.title}
    //     </div>
    //   ))}
    //   {/* {isAuthenticated && (
    //     <>
    //       <div>
    //         <h1> New link creation </h1>
    //         <div className="mt-4">
    //           <div className="block text-sm font-medium text-gray-700">
    //             Title
    //           </div>
    //           <input
    //             type="text"
    //             name="title"
    //             id="title"
    //             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //             placeholder="my awesome link"
    //             onChange={(e) => setTitle(e.target.value)}
    //           />
    //         </div>

    //         <div className="mt-4">
    //           <div className="block text-sm font-medium text-gray-700">URL</div>
    //           <input
    //             type="text"
    //             name="url"
    //             id="url"
    //             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //             placeholder="https://www.youtube.com/c/YourAverageTechBro"
    //             onChange={(e) => setUrl(e.target.value)}
    //           />
    //         </div>
    //         <button
    //           type="button"
    //           className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
    //           onClick={addNewLink}
    //         >
    //           Add new link
    //         </button>
    //       </div>

    //       <div>
    //         <h1> Image uploading </h1>
    //         {images.length > 0 && (
    //           <Image
    //             src={images[0]["data_url"]}
    //             height={100}
    //             width={100}
    //             alt="profile-picture"
    //           />
    //         )}
    //         <ImageUploading
    //           multiple
    //           value={images}
    //           onChange={onChange}
    //           maxNumber={1}
    //           dataURLKey="data_url"
    //         >
    //           {({ onImageUpload, onImageRemoveAll, isDragging, dragProps }) => (
    //             // write your building UI
    //             <div className="upload__image-wrapper bg-slate-300 flex justify-center p-4 rounded-lg underline text-base">
    //               {images.length === 0 ? (
    //                 <button
    //                   style={isDragging ? { color: "red" } : undefined}
    //                   onClick={onImageUpload}
    //                   {...dragProps}
    //                   className="w-3/4"
    //                 >
    //                   Click to upload a new image or drag and drop a new image
    //                   here
    //                 </button>
    //               ) : (
    //                 <button onClick={onImageRemoveAll}>
    //                   Remove all images
    //                 </button>
    //               )}
    //             </div>
    //           )}
    //         </ImageUploading>

    //         <button
    //           type="button"
    //           className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
    //           onClick={uploadProfilePicture}
    //         >
    //           Upload profile picture
    //         </button>
    //       </div>
    //     </>
    //   )} */}
    // </div>
    <div className="lg:px-20 md:px-6  px-4 md:py-12 py-8">
      <div className="lg:flex   items-center justify-between">
        {profilePictureUrl && (
          <div className="lg:w-1/3  sticky flex flex-col items-center justify-center ">
            <h1 className="text-4xl font-semibold mb-4 leading-9 text-gray-800 ">
              My links
            </h1>
            <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={profilePictureUrl}
                alt=""
              />

              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
                {userInfos?.username}
              </h1>

              <p className="mt-2 text-black capitalize  group-hover:text-gray-300">
                Frontend Developer
              </p>
              <p className="mt-2 text-black capitalize  group-hover:text-gray-300">
                Front End Dev 🎨 ⸱ React.Js ⚛️ ⸱ JavaScript ⚡️ Founder of
                @MentorMoi @thrill_theworld 🎓 ⸱ Youtube Channel 🍿 Dad &
                husband ❤️ ⸱ BJJ Brown belt 🥋 🇫🇷🇬🇧
              </p>

              <div className="flex mt-3 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600  hover:text-black dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600  hover:text-black dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600  hover:text-black dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <button
              role="button"
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800  flex items-center hover:underline"
            >
              <svg
                className="ml-2 mt-1 "
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 4H10.6666"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 6.66667L10.6667 4"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 1.33398L10.6667 4.00065"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="lg:w-7/12  lg:columns-2 sm:columns-2  gap-12  lg:mt-0 mt-8 ">
          {links?.map((link: Link, index: number) => {
            switch (link.type + link.socials) {
              case "profileTwitter":
                return (
                  <TwitterProfileCard url={link.url} username={link.username} />
                )
              case "newsletterSubstack":
                return (
                  <NewsletterCard
                    url={link.url}
                    title={link.title}
                    socials={link.socials}
                  />
                )
              case "profileYoutube":
                return (
                  <YoutubeProfileCard
                    url="{link.url}"
                    username="{link.username}"
                  />
                )
              case "tweetTwitter":
                return <TweetPostCard url={link.url} />
              case "profileTiktok":
                return (
                  <TiktokProfileCard
                    url="{link.url}"
                    username="{link.username}"
                  />
                )
              case "profileInstagram":
                return <InstagramProfileCard />
              case "profileTwitch":
                return (
                  <TwitchProfileCard
                    url="{link.url}"
                    username="{link.username}"
                  />
                )

              default:
                ;<div />
            }
            // ...
            return <div key={index}>{link.type + link.socials}</div>
          })}
          <TiktokProfileCard url="{link.url}" username="{link.username}" />
          <InstagramProfileCard />

          <TwitchProfileCard url="{link.url}" username="{link.username}" />
          {/* <YoutubeProfileCard url="{link.url}" username="{link.username}" />
          <TiktokProfileCard url="{link.url}" username="{link.username}" />
          <InstagramProfileCard />
          <TwitchProfileCard url="{link.url}" username="{link.username}" /> */}

          {/* <div className="w-full h-64  ">
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <ChakraImage
                objectFit="cover"
                maxW={{ base: "90%", sm: "200px" }}
                src="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">@Mans_JS</Heading>

                  <Text py="2">
                    💪️ entrepreneur 🧠 build 1 millions dollars company 😎️
                    You’ll have plenty of time to change the world later. Right
                    now, go out there and make a living.🍗
                  </Text>
                  <Text py="2">101k Followers</Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Follow
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          </div> */}

          {/* <TwitterProfileCard />
          <Draggable>
            <div className="w-full mt-8 h-full ">
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <ChakraImage
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">The perfect latte</Heading>

                    <Text py="2">
                      Caffè latte is a coffee beverage of Italian origin made
                      with espresso and steamed milk.
                    </Text>
                  </CardBody>

                  <CardFooter flex="" justifyContent="space-between">
                    <Button variant="solid" colorScheme="blue">
                      Buy Latte
                    </Button>
                    <Button
                      w="38px"
                      h="38px"
                      align="left"
                      justify=""
                      borderRadius="12px"
                      me="12px"
                      bg={iconBox}
                    >
                      <Icon
                        w="24px"
                        h="24px"
                        as={IoEllipsisHorizontalSharp}
                        color={iconColor}
                      />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          </Draggable>

          <Draggable>
            <div className="break-inside mt-6 relative overflow-hidden flex flex-col justify-center space-y-2 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-[white] text-[#DA552F]">
              <span className="uppercase text-xs ">Product Hunt</span>
              <div className="flex flex-row items-center space-x-3">
                <img src="https://www.vectorlogo.zone/logos/producthunt/producthunt-icon.svg" />
                <span className="text-base font-medium">
                  Congratulations, on the launch!
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Modify your data</span>
                <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-2 space-x-1 bg-white text-black">
                  <span>Go upvote</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h13M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className=" h-[500px]">
              <iframe
                src="https://www.tiktok.com/embed/7121784203888364806"
                className="h-[500px]"
                allowFullScreen
                scrolling="no"
                allow="encrypted-media;"
              ></iframe>
            </div>
          </Draggable>

          <div className="my-4 space-y-3">
            <span className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
              <img
                src="https://substack.com/img/substack.png"
                className="h-9"
              />
              <div className="">
                <span className="flex-1 ml-3  whitespace-nowrap">
                  Substack Newsletter
                </span>
                <span className="flex-1 bg-orange-700 py-2 px-2 rounded-md ml-3 whitespace-nowrap">
                  Suscribe
                </span>
              </div>
            </span>
          </div>
          <div className="flex cursor-pointer bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <img
                  alt="Placeholder Photo"
                  className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                  loading="lazy"
                  src="https://stackdiary.com/140x100.png"
                />
              </div>
            </div>

            <div className="p-4">
              <p className="text-sm line-clamp-1">New tweet title</p>

              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                Description of what you are sharing
              </p>

              <span className="flex items-center justify-start text-gray-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                stackdiary.com
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
