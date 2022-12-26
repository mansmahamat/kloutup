/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react"
// Assets
// Custom components
import MiniCalendar from "../../components/calendar/MiniCalendar"
import MiniStatistics from "../../components/card/MiniStatistics"
import IconBox from "../../components/icons/IconBox"
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md"
import CheckTable from "../../views/admin/default/components/CheckTable"
import ComplexTable from "../../views/admin/default/components/ComplexTable"
import DailyTraffic from "../../views/admin/default/components/DailyTraffic"
import PieCard from "../../views/admin/default/components/PieCard"
import Tasks from "../../views/admin/default/components/Tasks"
import TotalSpent from "../../views/admin/default/components/TotalSpent"
import WeeklyRevenue from "../../views/admin/default/components/WeeklyRevenue"
import {
  columnsDataCheck,
  columnsDataComplex,
  TableData,
} from "../../views/admin/default/variables/columnsData"
import tableDataCheck from "../../views/admin/default/variables/tableDataCheck.json"
import tableDataComplex from "../../views/admin/default/variables/tableDataComplex.json"
import { isWindowAvailable } from "../../utils/navigation"
import AdminLayout from "../../layouts/admin"
import { Image } from "../../components/image/Image"
import Usa from "../../assets/img/dashboards/usa.png"
import moment from "moment"
import TopSource from "../../views/admin/default/components/TopSource"
import TopOS from "../../views/admin/default/components/TopOS"
import ReactCountryFlag from "react-country-flag"

type Analytics = {
  bounce_rate: number
  country: string
  events: number
  pageviews: number
  visit_duration: number
  visitors: number
  visits: number
}

export default function UserReports() {
  // Chakra Color Mode

  const brandColor = useColorModeValue("brand.500", "white")
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100")

  const results = [
    {
      bounce_rate: 71,
      country: "FR",
      events: 540,
      pageviews: 540,
      visit_duration: 103,
      visitors: 262,
      visits: 299,
    },
    {
      bounce_rate: 62,
      country: "SE",
      events: 34,
      pageviews: 34,
      visit_duration: 150,
      visitors: 12,
      visits: 16,
    },
    {
      bounce_rate: 71,
      country: "US",
      events: 9,
      pageviews: 9,
      visit_duration: 2,
      visitors: 7,
      visits: 7,
    },
    {
      bounce_rate: 80,
      country: "BE",
      events: 8,
      pageviews: 8,
      visit_duration: 163,
      visitors: 5,
      visits: 5,
    },
    {
      bounce_rate: 25,
      country: "BJ",
      events: 14,
      pageviews: 14,
      visit_duration: 177,
      visitors: 4,
      visits: 4,
    },
    {
      bounce_rate: 33,
      country: "CA",
      events: 9,
      pageviews: 9,
      visit_duration: 20,
      visitors: 3,
      visits: 3,
    },
    {
      bounce_rate: 67,
      country: "SN",
      events: 4,
      pageviews: 4,
      visit_duration: 5,
      visitors: 3,
      visits: 3,
    },
    {
      bounce_rate: 100,
      country: "CD",
      events: 3,
      pageviews: 3,
      visit_duration: 0,
      visitors: 3,
      visits: 3,
    },
    {
      bounce_rate: 50,
      country: "CH",
      events: 6,
      pageviews: 6,
      visit_duration: 10,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 100,
      country: "CI",
      events: 2,
      pageviews: 2,
      visit_duration: 0,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 0,
      country: "MR",
      events: 11,
      pageviews: 11,
      visit_duration: 219,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 100,
      country: "MK",
      events: 2,
      pageviews: 2,
      visit_duration: 0,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 50,
      country: "RE",
      events: 4,
      pageviews: 4,
      visit_duration: 14,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 100,
      country: "DE",
      events: 2,
      pageviews: 2,
      visit_duration: 0,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 0,
      country: "DJ",
      events: 5,
      pageviews: 5,
      visit_duration: 117,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 0,
      country: "MA",
      events: 2,
      pageviews: 2,
      visit_duration: 14,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 0,
      country: "GT",
      events: 8,
      pageviews: 8,
      visit_duration: 54,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 0,
      country: "CM",
      events: 6,
      pageviews: 6,
      visit_duration: 55,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 0,
      country: "GB",
      events: 3,
      pageviews: 3,
      visit_duration: 9,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 100,
      country: "MU",
      events: 1,
      pageviews: 1,
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 100,
      country: "NL",
      events: 1,
      pageviews: 1,
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 0,
      country: "MX",
      events: 3,
      pageviews: 3,
      visit_duration: 58,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 100,
      country: "EG",
      events: 1,
      pageviews: 1,
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 100,
      country: "DZ",
      events: 1,
      pageviews: 1,
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
  ] as const

  const totalUniqueVisitors = results.reduce(function (acc, obj) {
    return acc + obj.visitors
  }, 0)

  const totalPageView = results.reduce(function (acc, obj) {
    return acc + obj.pageviews
  }, 0)

  const totalVisitDuration = results.reduce(function (acc, obj) {
    return acc + obj.visit_duration
  }, 0)

  const totalBounceRate = results.reduce(function (acc, obj) {
    return acc + obj.bounce_rate
  }, 0)

  const dataTotalUniqueVisitorsCountry = results.map((data) => ({
    visitors: data.visitors,
    country: data.country,
    pageViews: data.pageviews,
  }))

  const analytics30lastday = [
    {
      bounce_rate: null,
      date: "2022-11-25",
      pageviews: 0,
      visit_duration: null,
      visitors: 0,
      visits: 0,
    },
    {
      bounce_rate: 70,
      date: "2022-11-26",
      pageviews: 232,
      visit_duration: 83,
      visitors: 115,
      visits: 124,
    },
    {
      bounce_rate: 54,
      date: "2022-11-27",
      pageviews: 163,
      visit_duration: 129,
      visitors: 59,
      visits: 61,
    },
    {
      bounce_rate: 74,
      date: "2022-11-28",
      pageviews: 43,
      visit_duration: 108,
      visitors: 20,
      visits: 23,
    },
    {
      bounce_rate: 86,
      date: "2022-11-29",
      pageviews: 11,
      visit_duration: 6,
      visitors: 5,
      visits: 7,
    },
    {
      bounce_rate: 78,
      date: "2022-11-30",
      pageviews: 15,
      visit_duration: 8,
      visitors: 9,
      visits: 9,
    },
    {
      bounce_rate: 50,
      date: "2022-12-01",
      pageviews: 8,
      visit_duration: 102,
      visitors: 4,
      visits: 4,
    },
    {
      bounce_rate: 62,
      date: "2022-12-02",
      pageviews: 82,
      visit_duration: 5,
      visitors: 72,
      visits: 8,
    },
    {
      bounce_rate: 75,
      date: "2022-12-03",
      pageviews: 30,
      visit_duration: 140,
      visitors: 144,
      visits: 4,
    },
    {
      bounce_rate: 50,
      date: "2022-12-04",
      pageviews: 311,
      visit_duration: 151,
      visitors: 151,
      visits: 2,
    },
    {
      bounce_rate: 50,
      date: "2022-12-05",
      pageviews: 43,
      visit_duration: 263,
      visitors: 32,
      visits: 2,
    },
    {
      bounce_rate: 100,
      date: "2022-12-06",
      pageviews: 122,
      visit_duration: 0,
      visitors: 112,
      visits: 2,
    },
    {
      bounce_rate: 80,
      date: "2022-12-07",
      pageviews: 96,
      visit_duration: 0,
      visitors: 55,
      visits: 5,
    },
    {
      bounce_rate: 90,
      date: "2022-12-08",
      pageviews: 92,
      visit_duration: 5,
      visitors: 70,
      visits: 10,
    },
    {
      bounce_rate: 90,
      date: "2022-12-09",
      pageviews: 11,
      visit_duration: 2,
      visitors: 10,
      visits: 10,
    },
    {
      bounce_rate: 25,
      date: "2022-12-10",
      pageviews: 10,
      visit_duration: 219,
      visitors: 4,
      visits: 4,
    },
    {
      bounce_rate: 100,
      date: "2022-12-11",
      pageviews: 1,
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 87,
      date: "2022-12-12",
      pageviews: 25,
      visit_duration: 4,
      visitors: 14,
      visits: 15,
    },
    {
      bounce_rate: 57,
      date: "2022-12-13",
      pageviews: 13,
      visit_duration: 248,
      visitors: 4,
      visits: 7,
    },
    {
      bounce_rate: 74,
      date: "2022-12-14",
      pageviews: 26,
      visit_duration: 98,
      visitors: 15,
      visits: 19,
    },
    {
      bounce_rate: 55,
      date: "2022-12-15",
      pageviews: 40,
      visit_duration: 311,
      visitors: 17,
      visits: 22,
    },
    {
      bounce_rate: 62,
      date: "2022-12-16",
      pageviews: 11,
      visit_duration: 186,
      visitors: 6,
      visits: 8,
    },
    {
      bounce_rate: 0,
      date: "2022-12-17",
      pageviews: 2,
      visit_duration: 235,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 100,
      date: "2022-12-18",
      pageviews: 1,
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
    {
      bounce_rate: 100,
      date: "2022-12-19",
      pageviews: 3,
      visit_duration: 0,
      visitors: 2,
      visits: 3,
    },
    {
      bounce_rate: 100,
      date: "2022-12-20",
      pageviews: 2,
      visit_duration: 0,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 100,
      date: "2022-12-21",
      pageviews: 2,
      visit_duration: 0,
      visitors: 2,
      visits: 2,
    },
    {
      bounce_rate: 100,
      date: "2022-12-22",
      pageviews: 3,
      visit_duration: 0,
      visitors: 3,
      visits: 3,
    },
    {
      bounce_rate: null,
      date: "2022-12-23",
      pageviews: 0,
      visit_duration: null,
      visitors: 0,
      visits: 0,
    },
    {
      bounce_rate: null,
      date: "2022-12-24",
      pageviews: 0,
      visit_duration: null,
      visitors: 0,
      visits: 0,
    },
    {
      bounce_rate: 100,
      date: "2022-12-25",
      pageviews: 3,
      visit_duration: 0,
      visitors: 3,
      visits: 3,
    },
  ]

  const data30TotalUniqueVisitors = analytics30lastday.map((data) => ({
    visitors: data.visitors,
    date: moment(data.date).format("dddd, DD MMM"),
    name: moment(data.date).format("DD MMM"),
    pageViews: data.pageviews,
  }))

  const fetchTopSources = [
    {
      bounce_rate: 66,
      pageviews: 382,
      source: "Twitter",
      visit_duration: 73,
      visitors: 175,
      visits: 185,
    },
    {
      bounce_rate: 68,
      pageviews: 181,
      source: "Direct / None",
      visit_duration: 188,
      visitors: 85,
      visits: 108,
    },
    {
      bounce_rate: 79,
      pageviews: 103,
      source: "LinkedIn",
      visit_duration: 16,
      visitors: 59,
      visits: 62,
    },
    {
      bounce_rate: 100,
      pageviews: 3,
      source: "Google",
      visit_duration: 0,
      visitors: 3,
      visits: 3,
    },
    {
      bounce_rate: 33,
      pageviews: 9,
      source: "vercel.com",
      visit_duration: 264,
      visitors: 1,
      visits: 3,
    },
    {
      bounce_rate: 100,
      pageviews: 1,
      source: "indiehackers.com",
      visit_duration: 0,
      visitors: 1,
      visits: 1,
    },
  ]

  const topSourcesData = fetchTopSources.map((data) => ({
    visitors: data.visitors,
    source: data.source,
    pageViews: data.pageviews,
  }))

  const fetchTopOs = [
    {
      bounce_rate: 70,
      os: "iOS",
      pageviews: 252,
      visit_duration: 109,
      visitors: 130,
      visits: 151,
    },
    {
      bounce_rate: 71,
      os: "Android",
      pageviews: 173,
      visit_duration: 62,
      visitors: 93,
      visits: 98,
    },
    {
      bounce_rate: 72,
      os: "Windows",
      pageviews: 105,
      visit_duration: 88,
      visitors: 51,
      visits: 60,
    },
    {
      bounce_rate: 60,
      os: "Mac",
      pageviews: 127,
      visit_duration: 157,
      visitors: 41,
      visits: 47,
    },
    {
      bounce_rate: 50,
      os: "GNU/Linux",
      pageviews: 18,
      visit_duration: 110,
      visitors: 4,
      visits: 4,
    },
    {
      bounce_rate: 50,
      os: "Ubuntu",
      pageviews: 4,
      visit_duration: 4,
      visitors: 2,
      visits: 2,
    },
  ]

  const topOS = fetchTopOs.map((data) => ({
    visitors: data.visitors,
    os: data.os,
    pageViews: data.pageviews,
  }))

  // Math.floor(totalVisitDuration / 60) f

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Earnings"
              value="$350.4"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Spend this month"
              value="$642.39"
            />
            <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
            <MiniStatistics
              value=""
              endContent={
                <Flex me="-16px" mt="10px">
                  <ReactCountryFlag
                    className="emojiFlag"
                    countryCode="FR"
                    style={{
                      fontSize: "55px",
                      lineHeight: "2em",
                      marginRight: "1em",
                    }}
                    aria-label="e"
                  />
                </Flex>
              }
              name="Top country"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                  icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
                />
              }
              name="New Tasks"
              value="154"
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdFileCopy}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Total Projects"
              value="2935"
            />
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 1, xl: 1 }}
            width="100%"
            height="100%"
            minW={"100%"}
            gap="20px"
            mb="20px"
          >
            <TotalSpent data30TotalUniqueVisitors={data30TotalUniqueVisitors} />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
            <TopSource
              columnsData={columnsDataCheck}
              topSourcesData={topSourcesData}
              tableData={tableDataCheck as unknown as TableData[]}
            />{" "}
            <TopOS
              columnsData={columnsDataCheck}
              topOS={topOS}
              tableData={tableDataCheck as unknown as TableData[]}
            />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
            <CheckTable
              columnsData={columnsDataCheck}
              dataTotalUniqueVisitorsCountry={dataTotalUniqueVisitorsCountry}
              tableData={tableDataCheck as unknown as TableData[]}
            />
            {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
              <Tasks />
              <MiniCalendar h="100%" minW="100%" selectRange={false} />
            </SimpleGrid> */}
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  )
}
