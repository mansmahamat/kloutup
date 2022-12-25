import {
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Image as ChakraImage,
} from "@chakra-ui/react"
import React from "react"
import Draggable from "react-draggable"
import { ImEarth } from "react-icons/im"
import { IoEllipsisHorizontalSharp } from "react-icons/io5"
import IconBox from "../icons/IconBox"
import useSWR from "swr"

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

function YoutubeProfileCard(props: { url: string; username: string }) {
  let boxBg = useColorModeValue("white !important", "#111c44 !important")
  let mainText = useColorModeValue("gray.800", "white")
  let secondaryText = useColorModeValue("gray.400", "gray.400")
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200")
  let iconColor = useColorModeValue("brand.200", "white")

  const { url, username, ...rest } = props

  //const { data: userInfos, error } = useSWR(`/api/twitter/${username}`, fetcher)

  const userInfos = {
    data: {
      data: {
        profile_image_url:
          "https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <div className="grid h-full overflow-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
      <Flex
        borderRadius="20px"
        bg={boxBg}
        p="20px"
        h="345px"
        w={{ base: "315px", md: "345px" }}
        alignItems="center"
        direction="column"
      >
        <Button
          w="38px"
          h="38px"
          //@ts-ignore

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
        <ChakraImage
          src="https://www.followedapp.com/wp-content/uploads/2020/10/Youtube-Banner.png"
          maxW="80%"
          borderRadius="20px"
        />
        <Flex flexDirection="column" mb="30px">
          <ChakraImage
            src="https://yt3.ggpht.com/wazOIz6aphu0gAWfAsV8l_DMbHkks7Qz3NkEqUvk0KF9kfc4EnHg-gC1EwAOsUUSnBwuibgl=s88-c-k-c0x00ffffff-no-rj"
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
              Mans Life in Sweden
            </Text>
            {/* <ChakraImage
                alt=""
                src={"https://cdn-icons-png.flaticon.com/512/733/733579.png"}
                width="20px"
                height="20px"
                className="ml-1"
              /> */}
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
              {kFormatter(3530)}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Suscribers
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              {kFormatter(29)}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Videos
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              fontSize="xl"
              color={mainText}
              textAlign="center"
            >
              {kFormatter(102750)}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Views
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default YoutubeProfileCard
