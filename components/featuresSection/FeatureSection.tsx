import {
  DocumentArrowDownIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ScaleIcon,
} from "@heroicons/react/24/solid"
import { FaMailchimp } from "react-icons/fa"
import { IoLinkSharp, IoShareSocial } from "react-icons/io5"
import { RiCustomerServiceFill } from "react-icons/ri"

const transferFeatures = [
  {
    id: 1,
    name: "Unlimited links",
    description: "Add as many links as you like",
    icon: IoLinkSharp,
  },
  {
    id: 2,
    name: "Custom  link",
    description: "Share your personal link, eg: kloutup/james.",
    icon: RiCustomerServiceFill,
  },
  {
    id: 3,
    name: "Embed Twitch, Youtube, Tiktok, Twitter post",
    description:
      "Show the world who you are, embed for example your best Tiktok .",
    icon: IoShareSocial,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: "Custom background",
    description: "Choose the theme you prefer.",
    icon: DocumentArrowDownIcon,
  },
  {
    id: 2,
    name: "Analytics on visit (28 days)",
    description:
      "Let's be aware of who visits your profile, how long and where they come from. Maybe you have a good audience in Peru without knowing it",
    icon: FaMailchimp,
  },
]

export default function FeatureSection() {
  return (
    <div
      id="features"
      className="py-16 bg-gray-50 overflow-hidden font-inter lg:py-24"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center font-merriweather text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to share your online presence
          </h2>
          <p className="mt-4 max-w-3xl font-merriweather mx-auto text-center text-xl text-gray-500">
            Link your Tiktok, Twitter, playlist, cv, newsletters... and help
            your followers to find you easily.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-merriweather font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              One username for all social media.
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              KloutUp is a single link that you can use to reveal everything
              you’re sharing, everywhere you’re sharing it – all in one place.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-400  font-bold  text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-merriweather leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <div className="grid grid-cols-6 col-span-2   gap-2  ">
              <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                <img
                  className="h-full w-full object-cover "
                  src="images/cardFeature.png"
                  alt=""
                />
              </div>
              <div className=" overflow-hidden rounded-xl col-span-2 max-h-[14rem]">
                <img
                  className="h-full w-full object-bottom  object-cover  "
                  src="images/tiktokfeature.png"
                  alt=""
                />
              </div>
              <div className=" overflow-hidden rounded-xl col-span-4 max-h-[10rem]">
                <img
                  className="h-full w-full object-cover "
                  src="images/Widgetmusic.png"
                  alt=""
                />
              </div>
              <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                <img
                  className="h-full w-full object-cover "
                  src="images/cardFeatureTwitch.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Simplify your online presence
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Websites are slow, hard to update and maintain. KloutUp is easy
                for anyone to use. No code, no developers. Just link, share and
                grow!.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-400  text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>

              <img
                className="relative mb-10 mx-auto"
                width={490}
                src="images/Widget(3).png"
                alt=""
              />

              <img
                className="relative mx-auto"
                width={490}
                src="images/Search.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
