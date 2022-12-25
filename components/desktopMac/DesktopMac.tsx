import { useState, MouseEvent, memo } from "react"
import { useStoreActions } from "../../utils/store"

interface DesktopItem {
  id: string
  type: string
  title: string
}

const desktopItems: DesktopItem[] = [
  {
    id: "Instagram",
    type: "Instagram",
    title: "Instagram",
  },
  {
    id: "Twitter",
    type: "Twitter",
    title: "Twitter",
  },
  {
    id: "Photos",
    type: "Photos",
    title: "Photos",
  },
  {
    id: "Chrome",
    type: "Chrome",
    title: "Chrome",
  },
]

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Desktop = ({ isOpen, setIsOpen }: Props) => {
  const [focusedDesktopItem, setFocusedDesktopItem] = useState<string>("")
  const closeMenu = useStoreActions((actions) => actions.menuBar.closeMenu)

  const renderItemIcon = (type: string, active: boolean) => {
    let iconSrc: string = ""

    switch (type) {
      case "Twitter":
        iconSrc = "/images/Twitter.png"
        break
      case "Instagram":
        iconSrc = "/images/Instagram.png"
        break
      case "Photos":
        iconSrc = "/images/Photos.png"
        break
      case "Chrome":
        iconSrc = "/images/GoogleChrome.png"
        break
      default:
        break
    }

    return (
      <div
        className={`image-wrapper rounded-md border-2 border-transparent border-box px-1 py-2 ${
          active ? "bg-gray-900 border-gray-500 bg-opacity-30" : ""
        }`}
      >
        <img alt="select-none dock item logo" className="w-12" src={iconSrc} />
      </div>
    )
  }

  const handleClickDesktopItems = (e: MouseEvent<HTMLElement>, id: string) => {
    e.stopPropagation()
    if (id === "Chrome") {
      setIsOpen(true)
    }
    setFocusedDesktopItem(id)
    closeMenu()
  }

  const handleClickAroundDesktopItems = () => {
    setFocusedDesktopItem("")
    closeMenu()
  }

  return (
    <div
      className="flex flex-col items-end absolute right-2 top-[60px] h-screen w-screen border-box pt-6"
      onClick={handleClickAroundDesktopItems}
    >
      {desktopItems.map((item: DesktopItem, i: number) => (
        <button
          data-testid={`desktop-item-${i + 1}`}
          key={item.id}
          className="w-32 flex flex-col items-center my-2 p-1"
          onClick={(e) => handleClickDesktopItems(e, item.id)}
        >
          {renderItemIcon(item.type, focusedDesktopItem === item.id)}
          <h3
            className={`select-none text-xs text-white font-bold whitespace-nowrap text-center mt-0.5 text-shadow-sm pl-2 pr-2 pt-0.5 pb-0.5 rounded-md${
              focusedDesktopItem === item.id ? " bg-blue-700" : ""
            }`}
          >
            {item.title}
          </h3>
        </button>
      ))}
    </div>
  )
}

export default memo(Desktop)
