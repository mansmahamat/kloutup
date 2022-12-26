import { Fragment, SetStateAction, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Select, { components } from "react-select"
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { LinkIcon } from "@heroicons/react/24/solid"
import { supabase } from "../../utils/supabaseClient"
import TwitterIcon from "../../assets/img/socials/twitter.svg"
import InstagramIcon from "../../assets/img/socials/instagram-5.svg"
import { useRouter } from "next/router"
import InstagramProfileCard from "../instagramProfileCard/InstagramProfileCard"
import { layout } from "@chakra-ui/react"
import HorizontalSocialCard from "../horizontalSocialCard/HorizontalSocialCard"
import VerticalSocialCard from "../verticalSocialCard/VerticalSocialCard"

type Link = {
  title: string
  url: string
  socials: string
  typeTwitter: string
}

export default function ModalAddLink({ open, setOpen }: any) {
  const [title, setTitle] = useState<string | undefined>()
  const [socials, setSocials] = useState<string | undefined>()
  const [typeLink, setTypeLink] = useState<string | undefined>()
  const [typeLayout, setTypeLayout] = useState<string | undefined>()
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
            type: typeLink,
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

  const handleChangeTypeLink = (value: {
    value: SetStateAction<string | undefined>
  }) => {
    //@ts-ignore
    setTypeLink(value.value)
  }

  const handleChangeTypeLayout = (value: {
    value: SetStateAction<string | undefined>
  }) => {
    //@ts-ignore
    setTypeLayout(value.value)
  }
  const Option = (props: any) => (
    <components.Option {...props} className="flex row">
      <div className="flex ">
        <img src={props.data.icon.src} alt="logo" className="h-5 mr-2 flex " />
        {props.data.label}
      </div>
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

  const optionsTypeLink = [
    { value: "link", label: "link" },
    { value: "profile", label: "profile" },
    { value: "tweet", label: "tweet" },
  ]

  const optionsTypeLayout = [
    { value: "horizontal", label: "horizontal" },
    { value: "vertical", label: "vertical" },
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
                  <div className="sm:flex justify-center sm:items-start">
                    {/* <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
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
                    </div> */}
                    <div className=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                      <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Add a Link
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="defaultModal"
                        >
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              id="title"
                              onChange={(e) => setTitle(e.target.value)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Title"
                              required
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="price"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              URL
                            </label>
                            <input
                              type="text"
                              name="url"
                              id="url"
                              onChange={(e) => setUrl(e.target.value)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="WWW..."
                              required
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="category"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Socials
                            </label>

                            <Select
                              className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              value={selectedCountry}
                              options={socialsLinkArray}
                              //@ts-ignore

                              onChange={handleChange}
                              styles={{
                                singleValue: (base) => ({
                                  ...base,
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  fontSize: 14,
                                  color: "black",
                                }),
                              }}
                              components={{
                                Option,
                                SingleValue,
                              }}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="brand"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Type
                            </label>
                            <Select
                              className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              //@ts-ignore

                              onChange={handleChangeTypeLink}
                              options={optionsTypeLink}
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="brand"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Type
                            </label>
                            <Select
                              className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                              //@ts-ignore

                              onChange={handleChangeTypeLayout}
                              options={optionsTypeLayout}
                            />
                          </div>

                          {/* <div className="sm:col-span-2">
                            <label
                              htmlFor="description"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Description
                            </label>
                            <textarea
                              id="description"
                              rows={4}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Write product description here"
                            ></textarea>
                          </div> */}
                        </div>
                        <button
                          type="submit"
                          className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                          <svg
                            className="mr-1 -ml-1 w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Exemple
                        </button>
                      </form>

                      <div>
                        {(() => {
                          switch (
                            socials +
                            (typeLayout ?? "") +
                            (typeLink ?? "")
                          ) {
                            case "Twitterhorizontalprofile":
                              return <HorizontalSocialCard socials={socials} />
                            case "Twitterverticalprofile":
                              return <VerticalSocialCard socials={socials} />
                            case "Instagramverticalprofile":
                              return <VerticalSocialCard socials={socials} />
                            case "Instagramhorizontalprofile":
                              return <HorizontalSocialCard socials={socials} />
                            default:
                              return (
                                <div className="text-red-400">
                                  {socials +
                                    (typeLayout ?? "") +
                                    (typeLink ?? "")}
                                </div>
                              )
                          }
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border-2 border-purple-600 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Submit link
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border-2 border-red-600 bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
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
