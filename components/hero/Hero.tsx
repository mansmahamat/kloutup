import Image from "next/legacy/image"

import { Container } from "../container/Container"
import { ButtonLink } from "../button/Button"
import DesktopMac from "../desktopMac/DesktopMac"
import MenuBarMac from "../menuBarMac/MenuBarMac"
import Dock from "../dock/Dock"
import ScreenMac from "../screenMac/ScreenMac"
import IphoneScreen from "../iphoneScreen/IphoneScreen"
import { useState } from "react"

export function Hero() {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Container id="hero" className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto  max-w-4xl   font-merriweather  text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        All your socials presence in one link.
      </h1>
      <p className="mx-auto mt-6 mb-8 font-merriweather max-w-2xl text-lg tracking-tight text-slate-700">
        Share vibes with the world.
      </p>
      <div className="my-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            Join the wait list
          </a>
        </div>
        {/* <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Learn more
          </a>
        </div> */}
      </div>
      <div className="lg:flex hidden relative  rounded-md mx-auto w-full h-screen bg-wallpaper bg-cover overflow-hidden">
        <MenuBarMac />
        <ScreenMac isOpen={isOpen} setIsOpen={setIsOpen} />
        <DesktopMac isOpen={isOpen} setIsOpen={setIsOpen} />
        <Dock />
      </div>
      <IphoneScreen />
      {/* <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/gant-logo.svg"
                  alt="Transistor"
                  height={100}
                  width={100}
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/gant-logo.svg"
                  alt="Tuple"
                  height={100}
                  width={100}
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/gant-logo.svg"
                  alt="StaticKit"
                  height={100}
                  width={100}
                  unoptimized
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/gant-logo.svg"
                  alt="Mirage"
                  height={100}
                  width={100}
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/gant-logo.svg"
                  alt="Laravel"
                  height={100}
                  width={100}
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/gant-logo.svg"
                  alt="Statamic"
                  height={100}
                  width={100}
                  unoptimized
                />
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </Container>
  )
}
