import React, { useRef, useState } from "react"
import ConfettiExplosion from "react-confetti-explosion"

function Newsletter() {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

  const subscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const res = await fetch(`/api/mailchimp`, {
      body: JSON.stringify({
        //@ts-ignore
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage(error)
      return
    }
    //@ts-ignore
    inputEl.current.value = ""
    setError(false)
    setSubscribed(true)
    setIsExploding(true)
    setMessage("Successfully! 🎉 You are now subscribed.")
  }

  return (
    <section
      id="joinlist"
      className="max-w-md rounded-lg bg-purple-100 mx-auto py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:flex lg:items-center"
      aria-labelledby="newsletter-heading"
    >
      <div className="lg:w-0 lg:flex-1">
        <h2
          className="text-3xl font-extrabold text-purple-gray-900 sm:text-4xl"
          id="newsletter-heading"
        >
          Join the wait list 🥳
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-purple-gray-500">
          To make sure you dont miss the launch which will be in a very short
          time, join the waiting list.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8">
        <form className="sm:flex" onSubmit={subscribe}>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email-address"
            autoComplete="email"
            placeholder={
              subscribed ? "You joined the list !  🎉" : "Enter your email"
            }
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
            className="w-full px-5 py-3 border border-purple-gray-300 shadow-sm placeholder-purple-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:max-w-xs rounded-md"
          />
          {isExploding && <ConfettiExplosion />}
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              className={`w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                subscribed
                  ? "cursor-default"
                  : "hover:bg-primary-700 dark:hover:bg-primary-400"
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
              type="submit"
              disabled={subscribed}
            >
              {subscribed ? "Thank you!" : "Join"}
            </button>
          </div>
        </form>
        <p className="mt-3 text-sm text-purple-gray-500">
          We care about the protection of your data. Read our{" "}
          <a href="#" className="font-medium underline">
            Privacy Policy.
          </a>
        </p>
      </div>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">
          {message}
        </div>
      )}
    </section>
  )
}

export default Newsletter
