// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
// Custom components
import Card from "../../components/card/Card"
import IconBox from "../../components/icons/IconBox"
import Menu from "../../components/menu/MainMenu"
import React from "react"
import { FaLink, FaPlus } from "react-icons/fa"
// Assets
import { MdOutlineCloudDone } from "react-icons/md"

export default function Banner(props: {
  used: number
  total: number
  setOpen: Function
  [x: string]: any
}) {
  const { used, total, setOpen } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white")
  const brandColor = useColorModeValue("brand.500", "white")
  const textColorSecondary = "gray.400"
  const box = useColorModeValue("secondaryGray.300", "whiteAlpha.100")
  return (
    <Card mb={{ base: "0px", lg: "20px" }} alignItems="center">
      <Flex w="100%">
        <Icon
          onClick={() => setOpen(true)}
          as={FaPlus}
          color={brandColor}
          h="18px"
          w="18px"
        />
      </Flex>
      <IconBox
        mx="auto"
        h="100px"
        w="100px"
        icon={<Icon as={FaLink} color={brandColor} h="46px" w="46px" />}
        bg={box}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" mt="10px">
        Add a new link
      </Text>
      <Text
        color={textColorSecondary}
        fontSize="md"
        maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
        mx="auto"
      >
        Everything you are. In one simple link.
      </Text>
      <Box w="100%" mt="auto">
        <Flex w="100%" justify="space-between" mb="10px">
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {used} GB
          </Text>
          <Text color={textColorSecondary} fontSize="sm" maxW="40%">
            {total} GB
          </Text>
        </Flex>
        <Progress
          alignItems="start"
          colorScheme="brandScheme"
          value={(used / total) * 100}
          w="100%"
        />
      </Box>
    </Card>
  )
}
