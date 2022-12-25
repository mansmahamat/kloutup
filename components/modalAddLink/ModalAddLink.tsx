import { Fragment, SetStateAction, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Select, { components } from "react-select"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { LinkIcon } from "@heroicons/react/24/solid"
import { supabase } from "../../utils/supabaseClient"
import TwitterIcon from "../../assets/img/socials/twitter.svg"
import InstagramIcon from "../../assets/img/socials/instagram-5.svg"
import { useRouter } from "next/router"

type Link = {
  title: string
  url: string
  socials: string
  typeTwitter: string
}

export default function ModalAddLink({ open, setOpen }: any) {
  const [title, setTitle] = useState<string | undefined>()
  const [socials, setSocials] = useState<string | undefined>()
  const [typeTwitter, setTypeTwitter] = useState<string | undefined>()
  const [links, setLinks] = useState<Link[]>()
  const [url, setUrl] = useState<string | undefined>()
  const [userId, setUserId] = useState<string | undefined>()

  const cancelButtonRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser()
      console.log("user", user)
      if (user.data.user) {
        const userId = user.data.user?.id
        setUserId(userId)
      }
    }

    getUser()
  }, [])

  const addNewLink = async () => {
    try {
      if (title && url && userId && socials) {
        const { data, error } = await supabase
          .from("links")
          .insert({
            title: title,
            url: url,
            user_id: userId,
            socials: socials,
            type: typeTwitter,
          })
          .select()
        if (error) throw error
        console.log("data: ", data)
        if (links) {
          setLinks([...data, ...links])
        }
        setOpen(false)
        router.reload()
      }
    } catch (error) {
      console.log("error: ", error)
    }
  }

  const socialsLinkArray = [
    { value: "Twitter", label: "Twitter", icon: TwitterIcon },
    { value: "Instagram", label: "Instagram", icon: InstagramIcon },
  ]
  const [selectedCountry, setSelectedCountry] = useState()

  const handleChange = (
    value: SetStateAction<{ value: string; label: string; icon: any }>
  ) => {
    //@ts-ignore
    setSocials(value.value)
    //@ts-ignore
    setSelectedCountry(value)
  }

  const handleChangeTypeTwitter = (value: {
    value: SetStateAction<string | undefined>
  }) => {
    //@ts-ignore
    setTypeTwitter(value.value)
  }
  const Option = (props: any) => (
    <components.Option {...props} className="flex flex-row">
      <img src={props.data.icon.src} alt="logo" className="h-5 flex " />
      {props.data.label}
    </components.Option>
  )

  const SingleValue = ({ children, ...props }: any) => (
    <components.SingleValue {...props}>
      <img
        //@ts-ignore

        src={selectedCountry?.icon?.src}
        alt="s-logo"
        className=" mr-2 h-5"
      />
      {children}
    </components.SingleValue>
  )

  const optionsTypeTwitter = [
    { value: "profile", label: "profile" },
    { value: "tweet", label: "tweet" },
  ]

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10">
                      <LinkIcon
                        className="h-6 w-6 text-purple-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add a link
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="">
                          <div className="block text-sm font-medium text-gray-700">
                            Title
                          </div>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="my awesome link"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        <div className="mt-4">
                          <div className="block text-sm font-medium text-gray-700">
                            URL
                          </div>
                          <input
                            type="text"
                            name="url"
                            id="url"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="https://www.youtube.com/c/YourAverageTechBro"
                            onChange={(e) => setUrl(e.target.value)}
                          />
                        </div>
                        <div className="mt-4">
                          <div className="block text-sm font-medium text-gray-700">
                            Socials
                          </div>
                          <Select
                            value={selectedCountry}
                            options={socialsLinkArray}
                            //@ts-ignore

                            onChange={handleChange}
                            styles={{
                              singleValue: (base) => ({
                                ...base,
                                display: "flex",
                                alignItems: "center",
                              }),
                            }}
                            components={{
                              Option,
                              SingleValue,
                            }}
                          />
                        </div>
                        {socials === "Twitter" && (
                          <div className="mt-4">
                            <div className="block text-sm font-medium text-gray-700">
                              Type
                            </div>
                            <Select
                              //@ts-ignore

                              onChange={handleChangeTypeTwitter}
                              options={optionsTypeTwitter}
                            />
                          </div>
                        )}
                        <button
                          type="button"
                          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
                          onClick={addNewLink}
                        >
                          Add new link
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
