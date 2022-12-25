/* This example requires Tailwind CSS v2.0+ */

import { CheckIcon } from "@heroicons/react/24/solid"

const tiers = [
  {
    name: "Free",
    href: "/#joinlist",
    priceMonthly: 0,
    description:
      "You just want to make it simple, sharing your links without pain",
    features: [
      "Unlimited links",
      "Embed Twitter, Tiktok, Youtube & Twitch content",
      "Free themes",
      "Social icons",
      "Custom Profile Picture & Title + Bio Description",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    href: "/#joinlist",
    priceMonthly: 6,
    description:
      "Take it to the next level. Build your audience and analyse the sharing of your link. The world is yours",
    features: [
      "Unlimited links",
      "Embed Twitter, Tiktok, Youtube & Twitch content",
      "Free themes",
      "Social icons",
      "Custom Profile Picture & Title + Bio Description",
      "Location, visitors, visitors duration analytics",
      "Hide KloutUp logo, let your brand shine",
      "Custom color themes",
    ],
    mostPopular: true,
  },
]

export default function Pricing() {
  return (
    <div id="pricing" className="">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            <h2 className=" leading-6 font-semibold text-slate-900 uppercase tracking-wider">
              Pricing
            </h2>
            <p className="text-3xl font-merriweather font-extrabold text-slate-900 sm:text-4xl lg:text-5xl">
              The perfect plan for you
            </p>
            {/* <p className="text-xlfont-merriweather  text-slate-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              sequi unde repudiandae natus.
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={
                    "flex border border-purple-600 flex-col rounded-lg shadow-lg overflow-hidden"
                  }
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-purple-100 text-purple-600"
                        id="tier-standard"
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular && (
                        <h3
                          className="inline-flex mx-4 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-purple-600 text-purple-100"
                          id="tier-standard"
                        >
                          Most Popular
                        </h3>
                      )}
                    </div>
                    <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                      ${tier.priceMonthly}
                      <span className="ml-1 text-2xl font-medium text-gray-500">
                        /month
                      </span>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-md shadow">
                      <a
                        href={tier.href}
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        aria-describedby="tier-standard"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
