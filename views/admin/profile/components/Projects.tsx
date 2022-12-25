// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react"
import { useEffect, useState } from "react"
// Assets
import Project1 from "../../../../assets/img/profile/Project1.png"
import Project2 from "../../../../assets/img/profile/Project2.png"
import Project3 from "../../../../assets/img/profile/Project3.png"
// Custom components
import Card from "../../../../components/card/Card"
import { supabase } from "../../../../utils/supabaseClient"
import Project from "./Project"

type Link = {
  title: string
  url: string
  socials: string
  type: string
}

export default function Projects(props: { links: any; [x: string]: any }) {
  const { links, ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white")
  const textColorSecondary = "gray.400"
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  )

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        All links
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </Text>
      {links?.map((link: Link, index: number) => (
        <div key={index}>
          <Project
            boxShadow={cardShadow}
            mb="20px"
            image={Project1}
            ranking="1"
            link="#"
            title={link.title}
          />
        </div>
      ))}
    </Card>
  )
}
