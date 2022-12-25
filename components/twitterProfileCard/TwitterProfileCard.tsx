import {
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Image as ChakraImage,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react"
import React from "react"
import Draggable from "react-draggable"
import { ImEarth } from "react-icons/im"
import { IoEllipsisHorizontalSharp } from "react-icons/io5"
import IconBox from "../icons/IconBox"
import useSWR from "swr"
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"
import { TwitterApi } from "twitter-api-v2"

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

function TwitterProfileCard(props: { url: string; username: string }) {
  let boxBg = useColorModeValue("white !important", "#111c44 !important")
  let mainText = useColorModeValue("gray.800", "white")
  let secondaryText = useColorModeValue("gray.400", "gray.400")
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200")
  let iconColor = useColorModeValue("brand.200", "white")

  const { url, username, ...rest } = props

  //  const { data: userInfos, error } = useSWR(`/api/twitter/${username}`, fetcher)

  const userInfos = {
    data: {
      data: {
        profile_image_url:
          "https://yt3.ggpht.com/wazOIz6aphu0gAWfAsV8l_DMbHkks7Qz3NkEqUvk0KF9kfc4EnHg-gC1EwAOsUUSnBwuibgl=s88-c-k-c0x00ffffff-no-rj",
        username: "mans_js",
        name: "MAnsour",
        public_metrics: {
          followers_count: 11800,
          tweet_count: 15000,
          following_count: 500,
        },
      },
    },
  }

  function kFormatter(num: number) {
    return Math.abs(num) > 999
      ? //@ts-ignore
        Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num)
  }

  return (
    <div className=" h-full overflow-auto   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
      <Flex
        borderRadius="20px"
        bg={boxBg}
        p="20px"
        h="345px"
        w={{ base: "315px", md: "345px" }}
        alignItems="center"
        direction="column"
      >
        <Popover>
          <PopoverTrigger>
            <Button
              w="38px"
              h="38px"
              align="left"
              justify=""
              borderRadius="12px"
              me="12px"
            >
              <Icon
                w="24px"
                h="24px"
                as={IoEllipsisHorizontalSharp}
                color={iconColor}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Share on socials media</PopoverHeader>
            <PopoverBody>
              <Flex justifyContent="center">
                <TwitterShareButton url="https://twitter.com/Mans_JS">
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <LinkedinShareButton url="">
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <FacebookShareButton url="">
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <ChakraImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqULDJtdDOgUyjTXqKZ-HjntkBE8c9ymDpI-XCp7I7wAFfWSnRcBwUx8VUtA1L4sf0Ulg&usqp=CAU"
          maxW="80%"
          borderRadius="20px"
        />
        <Flex flexDirection="column" mb="30px">
          <ChakraImage
            src={userInfos?.data?.data?.profile_image_url}
            border="5px solid red"
            mx="auto"
            borderColor={boxBg}
            width="68px"
            height="68px"
            mt="-38px"
            borderRadius="50%"
          />

          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              fontWeight="600"
              color={mainText}
              textAlign="center"
              flexDirection="row"
              fontSize="xl"
            >
              @ {userInfos?.data?.data?.username}
            </Text>
            <ChakraImage
              alt=""
              src={"https://cdn-icons-png.flaticon.com/512/733/733579.png"}
              width="20px"
              height="20px"
              className="ml-1"
            />
          </Flex>
          <Text
            color={secondaryText}
            textAlign="center"
            fontSize="sm"
            fontWeight="500"
          >
            {userInfos?.data?.data?.name}
          </Text>
        </Flex>
        <Flex justify="space-between" w="100%" px="36px">
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              {kFormatter(userInfos?.data?.data?.public_metrics?.tweet_count)}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Tweets
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              {kFormatter(
                userInfos?.data?.data?.public_metrics?.followers_count
              )}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Followers
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              fontSize="xl"
              color={mainText}
              textAlign="center"
            >
              {kFormatter(
                userInfos?.data?.data?.public_metrics?.following_count
              )}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Following
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default TwitterProfileCard
