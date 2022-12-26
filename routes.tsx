import { Icon } from "@chakra-ui/react"
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAnalytics,
} from "react-icons/md"

// Admin Imports
import MainDashboard from "./pages/admin/default"
import NFTMarketplace from "./pages/admin/nft-marketplace"
import Profile from "./pages/admin/[creatorSlug]/profile"
import DataTables from "./pages/admin/data-tables"

// Auth Imports
import { IRoute } from "./types/navigation"

const routes: IRoute[] = [
  {
    name: "Home",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  //   {
  //     name: "NFT Marketplace",
  //     layout: "/admin",
  //     path: "/nft-marketplace",
  //     icon: (
  //       <Icon
  //         as={MdOutlineShoppingCart}
  //         width="20px"
  //         height="20px"
  //         color="inherit"
  //       />
  //     ),
  //     component: NFTMarketplace,
  //     secondary: true,
  //   },
  //   {
  //     name: "Data Tables",
  //     layout: "/admin",
  //     icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //     path: "/data-tables",
  //     component: DataTables,
  //   },
  {
    name: "Analytics",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdAnalytics} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
]

export default routes
