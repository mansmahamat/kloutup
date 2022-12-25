import { Image as ChakraImage } from "@chakra-ui/react"
import React from "react"
import Draggable from "react-draggable"

function InstagramProfileCard() {
  function kFormatter(num: number) {
    return Math.abs(num) > 999
      ? //@ts-ignore
        Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num)
  }
  return (
    <Draggable>
      <div className=" bg-white  py-4 px-2  mt-4">
        <div className="flex  flex-col items-start w-full m-auto sm:flex-row">
          <div className="flex mx-auto sm:mr-10 sm:m-0">
            <div className="items-center justify-center w-16 h-16 m-auto mr-4 sm:w-32 sm:h-32">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1669383488518-3f367058d9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2364&q=80"
                className="object-cover w-20 h-20 mx-auto rounded-full "
              />
            </div>
          </div>
          <div className="flex   flex-col pt-4 mx-auto my-auto sm:pt-0 sm:mx-0">
            <div className="flex  flex-col mx-auto sm:flex-row sm:mx-0 ">
              <h2 className="flex pr-4 text-xl font-light text-gray-900 sm:text-3xl">
                Jon
              </h2>
              <div className="flex">
                <a className="flex items-center px-1 text-sm font-medium text-gray-900 bg-transparent border border-gray-600 rounded outline-none sm:ml-2 hover:bg-blue-600 hover:text-white focus:outline-none hover:border-blue-700">
                  Follow
                </a>
              </div>
            </div>
            <div className="flex flex-col  items-start mt-3 space-x-2">
              <div className="flex  ">
                <span className="mr-1  font-semibold">{kFormatter(88607)}</span>{" "}
                Follower
              </div>
              <div className="flex">
                <span className="mr-1 font-semibold">{kFormatter(388)}</span>{" "}
                Following
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-5">
          <div className="flex items-center ">
            <p className="text-sm text-gray-500 md:text-base">Instagram</p>
            <ChakraImage
              alt=""
              src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}
              width="20px"
              height="20px"
              className="mx-2"
            />
          </div>
          <p className="text-sm text-gray-800 md:text-base">PSG & France</p>
        </div>
      </div>
    </Draggable>
  )
}

export default InstagramProfileCard
