import { Image as ChakraImage } from "@chakra-ui/react"
import React from "react"
import TwitterIcon from "../../assets/img/socials/twitter.svg"
import InstagramIcon from "../../assets/img/socials/instagram-5.svg"

type Props = {
  socials: string | undefined
}

function HorizontalSocialCard({ socials }: Props) {
  const socialsLinkArray = [
    { value: "Twitter", label: "Twitter", icon: TwitterIcon },
    { value: "Instagram", label: "Instagram", icon: InstagramIcon },
  ]

  function findArrayElementByTitle(socialsLinkArray: any) {
    const test = socialsLinkArray.find((element: { value: string }) => {
      return element.value === socials
    })
    return test.icon.src
  }

  return (
    <div className="user-row rounded-lg flex flex-col items-center justify-between cursor-pointer  p-4 duration-300 sm:flex-row sm:py-4 sm:px-8 bg-[#f6f8f9]">
      <div className="user flex items-center text-center flex-col sm:flex-row sm:text-left">
        <div className="avatar-content mb-2.5 sm:mb-0 sm:mr-2.5">
          <img
            className="avatar w-20 h-20 rounded-full"
            src="https://randomuser.me/api/portraits/men/32.jpg"
          />
        </div>
        <div className="user-body flex flex-col mb-4 sm:mb-0 sm:mr-4">
          <a href="#" className="title font-medium no-underline">
            @thompson_
          </a>
          <div className="skills flex flex-col">
            <span className="subtitle text-slate-500">Marketing Lead</span>
            <span className="subtitle text-slate-500">184k followerss</span>
          </div>
        </div>
      </div>
      <div></div>
      <div className="user-option justify-center items-center flex-col flex mx-auto sm:ml-auto sm:mr-0">
        <button
          className="btn inline-block select-none no-underline align-middle cursor-pointer whitespace-nowrap px-4 py-1.5 rounded text-base font-medium leading-6 tracking-tight text-white text-center border-0 bg-[#6911e7] hover:bg-[#590acb] duration-300"
          type="button"
        >
          Follow
        </button>

        <ChakraImage
          alt=""
          src={findArrayElementByTitle(socialsLinkArray)}
          width="28px"
          height="28px"
          className="ml-1 mt-3"
        />
      </div>
    </div>
  )
}

export default HorizontalSocialCard
