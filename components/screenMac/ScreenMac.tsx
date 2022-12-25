import React from "react"
import Draggable from "react-draggable"
import NewsletterCard from "../newsletterCard/NewsletterCard"
import TwitchProfileCard from "../twitchProfileCard/TwitchProfileCard"
import TwitterProfileCard from "../twitterProfileCard/TwitterProfileCard"

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function ScreenMac({ isOpen, setIsOpen }: Props) {
  return (
    <>
      {isOpen && (
        <Draggable>
          <div className=" z-50 left-0  right-0 bottom-[800px] absolute    px-4 sm:px-6 lg:px-8">
            <div className="bg-white mx-auto container w-auto overflow-hidden">
              <div className="lg:flex   items-center justify-between">
                <div className="border w-[800px] overflow-hidden max-h-[600px] top-[80px] left-[100px] absolute border-gray-200 shadow-2xl rounded-tl-lg rounded-tr-lg bg-gray-100">
                  <div className="py-2 px-2 bg-gray-200 rounded-tl-md rounded-tr-md flex items-center">
                    <div
                      onClick={() => setIsOpen(false)}
                      className="rounded-full cursor-pointer h-4 w-4 bg-red-400 flex text-center items-center text-xs  justify-center  mr-3"
                    >
                      x
                    </div>
                    <div className="rounded-full h-4 w-4 bg-yellow-400 flex mr-3 text-center items-center text-xs  justify-center">
                      -
                    </div>
                    <div className="rounded-full h-4 w-4 bg-green-400 flex mr-3"></div>
                    <div className="flex-auto px-2 py-1 ml-5 mr-1 rounded-md bg-white text-xs">
                      https://www.kloutup.co
                    </div>
                  </div>
                  <div className=" mt-4 lg:flex lg:justify-start    min-h-full  lg:items-center justify-between">
                    <div className="lg:w-1/2 h-full sticky flex flex-col items-center justify-start ">
                      <h1 className="text-4xl font-semibold mb-4 leading-9 text-gray-800 ">
                        My links
                      </h1>
                      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-600 rounded-xl">
                        <img
                          className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                          src="https://yt3.ggpht.com/wazOIz6aphu0gAWfAsV8l_DMbHkks7Qz3NkEqUvk0KF9kfc4EnHg-gC1EwAOsUUSnBwuibgl=s88-c-k-c0x00ffffff-no-rj"
                          alt=""
                        />

                        <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize  group-hover:text-white">
                          @Mans_JS
                        </h1>

                        <p className="mt-2 text-black capitalize  group-hover:text-gray-300">
                          Frontend Developer
                        </p>
                        <p className="mt-2 text-black capitalize  group-hover:text-gray-300">
                          Front End Dev 🎨 ⸱ React.Js ⚛️ ⸱ JavaScript ⚡️
                          Founder of @MentorMoi @thrill_theworld 🎓 ⸱ Youtube
                          Channel 🍿 Dad & husband ❤️ ⸱ BJJ Brown belt 🥋 🇫🇷🇬🇧
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-1/2  z-50 mb-4 mx-2  ">
                      <TwitterProfileCard
                        url="{link.url}"
                        username="{link.username}"
                      />
                      <NewsletterCard
                        url="{link.url}"
                        title="My crazy journey"
                        socials="Substack"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  )
}

export default ScreenMac
