import moment from "moment"
import React from "react"

function IphoneScreen() {
  return (
    <div className="grid min-h-screen lg:hidden  bg-purple-50 place-items-center">
      <div className="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden ring ring-purple-400 shadow-xl">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="images/iphone_14_pro_max.jpg"
        />
        <div className="absolute top-0 inset-x-0">
          <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
        </div>
        <div className="relative">
          <div className="mr-5 mt-2 flex justify-end space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
              />
            </svg>
          </div>
          <div className="h-0.5 w-10 mt-1.5 mr-7 bg-white rounded ml-auto"></div>
          <div className="mt-2 flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            <p className="mt-3 text-white text-6xl font-extralight">
              {" "}
              {moment().format("h:mm")}{" "}
            </p>
            <p className="mt-1 text-white text-lg font-light">
              {" "}
              {moment().format("ll")}
            </p>
          </div>
          <div className="relative mt-4 mx-2">
            <div className="absolute -bottom-4 scale-[0.85] origin-bottom inset-x-0 h-full w-full bg-white/10 backdrop-blur-md rounded-2xl"></div>
            <div className="absolute -bottom-2 scale-95 origin-bottom inset-x-0 h-full w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-sm"></div>
            <div className="p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs mb-2 font-bold">Klout Up</p>
                  <h2 className="text-lg font-bold">@Mans_JS</h2>
                </div>
                <span className="bg-gray-500 h-10 w-10 rounded-full text-white flex items-center justify-center">
                  <img
                    className="rounded-full h-10 w-full object-bottom  object-cover"
                    src="https://yt3.ggpht.com/wazOIz6aphu0gAWfAsV8l_DMbHkks7Qz3NkEqUvk0KF9kfc4EnHg-gC1EwAOsUUSnBwuibgl=s88-c-k-c0x00ffffff-no-rj"
                    alt="Surfer at sunset"
                  />
                </span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <img
                    className="rounded-lg  h-24 w-full object-bottom  object-cover"
                    src="images/tweetcard.png"
                    alt="Surfer at sunset"
                  />
                  <h3 className="mt-2 text-xs font-bold leading-tight">
                    Twitter profile
                  </h3>
                  {/* <p className="mt-1 text-xs">
                    Its all fun and thrills until you get sucked over the falls.
                  </p> */}
                </div>
                <div>
                  <img
                    className="rounded-lg h-24 w-full object-cover"
                    src="images/twitchcard.png"
                    alt="CP3 vs the Greek Freak"
                  />
                  <h3 className="mt-2 text-xs font-bold leading-tight">
                    Twitch Profile
                  </h3>
                  {/* <p className="mt-1 text-xs">
                    Bucks vs Suns is shaping up to be a very intriguing series!
                  </p> */}
                </div>
              </div>
              <hr className="mt-4 border-black/20" />
              <div className="mt-3 grid grid-cols-3 items-end">
                <div className="col-span-2">
                  <h3 className="text-xs font-bold">Used by</h3>
                  <p className="mt-0.5 text-xs">Anita, Paul, and Sarah...</p>
                </div>
                <ul className="flex -space-x-4 flex-row-reverse space-x-reverse">
                  <li>
                    <img
                      className="h-8 w-8 mr-1 rounded-full z-50 object-cover"
                      src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="h-8 w-8 rounded-full z-50 object-cover"
                      src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="h-8 w-8 rounded-full z-50 object-cover"
                      src="https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20">
          <div className="px-10 flex justify-between">
            <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </button>
            <button className="bg-gray-800/40 backdrop-blur-md text-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="absolute bottom-1 inset-x-0">
            <div className="mx-auto h-1 w-28 rounded bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IphoneScreen
