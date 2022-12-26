import { Image as ChakraImage } from "@chakra-ui/react"
import React from "react"
import TwitterIcon from "../../assets/img/socials/twitter.svg"
import InstagramIcon from "../../assets/img/socials/instagram-5.svg"

type Props = {
  socials: string | undefined
}

function VerticalSocialCard({ socials }: Props) {
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
    <div className="flex justify-center">
      <a className="rounded-3xl inline-block overflow-hidden shadow-xl max-w-xs cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
        <div className="relative group w-full overflow-hidden bg-black h-32 rounded-t-3xl">
          <img
            src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
          />

          <div className="absolute mt-6 flex-col bg-gradient-to-t from-black w-full h-full flex items-center justify-center -inset-y-0">
            <ChakraImage
              src="https://yt3.ggpht.com/wazOIz6aphu0gAWfAsV8l_DMbHkks7Qz3NkEqUvk0KF9kfc4EnHg-gC1EwAOsUUSnBwuibgl=s88-c-k-c0x00ffffff-no-rj"
              border="2px solid black"
              mx="auto"
              width="68px"
              height="68px"
              mt="-38px"
              borderRadius="50%"
            />
            <h1 className="font-bold text-2xl text-white mb-2">@Mans_JS</h1>
          </div>
        </div>
        <div className="bg-white">
          <div className="text-center items-center flex-col flex justify-center px-3 pb-6 pt-2">
            <ChakraImage
              alt=""
              src={findArrayElementByTitle(socialsLinkArray)}
              width="28px"
              height="28px"
              className="ml-1 mt-3"
            />
            <p className="mt-2 font-sans font-light text-slate-700">
              Front End Dev 🎨 ⸱ React.Js ⚛️ ⸱ JavaScript ⚡️ Founder of
              @MentorMoi @thrill_theworld 🎓 ⸱ Youtube Channel 🍿 Dad & husband
              ❤️ ⸱ BJJ Brown belt 🥋 🇫🇷🇬🇧
            </p>
          </div>
          <div className="flex justify-center pb-3 text-slate-700">
            <div className="text-center mr-3 border-r pr-3 last:border-r-0">
              <h2>Followers</h2>
              <span>11k</span>
            </div>
            <div className="text-center mr-3 border-r pr-3 last:border-r-0">
              <h2>Following</h2>
              <span>500</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default VerticalSocialCard
