import React from "react"

function FeatureSectionAnalytics() {
  return (
    <div className="relative  bg-gray-50 mb-24 lg:mb-72 sm:mb-36   pt-16 h-full sm:pt-24 ">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
            Analytics
          </h2>
          <p className="mt-2 font-merriweather text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Track your audience
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Get an overview of who visits your KloutUp page, whether in real
            time, over the last 7 or 30 days or even over the whole year. On the
            dashboard you can see the number of visitors, the time of visit, how
            many times your page has been viewed; from which city, country your
            visitors come from, which type of screen (phone, tablet...).
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg   shadow-xl ring-1 ring-black ring-opacity-5"
            src="images/Reports.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureSectionAnalytics
