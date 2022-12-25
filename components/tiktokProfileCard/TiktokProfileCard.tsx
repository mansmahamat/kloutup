import {
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Image as ChakraImage,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import Draggable from "react-draggable"
import { ImEarth } from "react-icons/im"
import { IoEllipsisHorizontalSharp } from "react-icons/io5"
import IconBox from "../icons/IconBox"
import useSWR from "swr"
import TwitchApi from "node-twitch"

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

function TiktokProfileCard(props: { url: string; username: string }) {
  const [userData, setUserData] = useState()
  let boxBg = useColorModeValue("white !important", "#111c44 !important")
  let mainText = useColorModeValue("gray.800", "white")
  let secondaryText = useColorModeValue("gray.400", "gray.400")
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200")
  let iconColor = useColorModeValue("brand.200", "white")
  const mm = "mans_js"
  const { url, username, ...rest } = props

  function kFormatter(num: number) {
    return Math.abs(num) > 999
      ? //@ts-ignore
        Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num)
  }

  // const { data: userInfos }: any = useSWR(`/api/twitch/${mm}`, fetcher)

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
          src="https://seeklogo.com/images/T/tiktok-banner-black-logo-BFF519C2A1-seeklogo.com.png"
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
              mans_js
            </Text>
            <ChakraImage
              alt=""
              src={"https://cdn-icons-png.flaticon.com/512/2504/2504946.png"}
              width="20px"
              height="20px"
              className="ml-1"
            />
          </Flex>
        </Flex>
        <Flex textAlign="center" justify="space-between" w="100%" px="36px">
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              {kFormatter(12098)}
            </Text>
            <Text color={secondaryText} fontWeight="500">
              followers
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              {kFormatter(40983)}
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

export default TiktokProfileCard
