// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
// Custom components
import Card from "../../../../components/card/Card"
// import LineChart from "../../../../components/charts/LineChart"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { IoCheckmarkCircle } from "react-icons/io5"
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md"
// Assets
import { RiArrowUpSFill } from "react-icons/ri"
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../../variables/charts"
import {
  LineChart,
  Line,
  AreaChart,
  XAxis,
  CartesianGrid,
  Tooltip,
  Area,
  YAxis,
} from "recharts"

export default function TotalSpent(props: {
  data30TotalUniqueVisitors: any
  [x: string]: any
}) {
  const { data30TotalUniqueVisitors, ...rest } = props

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white")
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white")
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100")
  const iconColor = useColorModeValue("brand.500", "white")
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100")
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  )
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      mb="0px"
      {...rest}
    >
      <Flex justify="space-between" ps="0px" pe="20px" pt="5px" w="100%">
        <Flex align="center" w="100%">
          <Button
            bg={boxBg}
            fontSize="sm"
            fontWeight="500"
            color={textColorSecondary}
            borderRadius="7px"
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me="4px"
            />
            This month
          </Button>
          <Button
            ms="auto"
            alignItems="center"
            justifyContent="center"
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w="37px"
            h="37px"
            lineHeight="100%"
            borderRadius="10px"
            {...rest}
          >
            <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "column" }}>
        <Flex flexDirection="column" me="20px" ml="20px" mb="28px" mt="28px">
          <Text
            color={textColor}
            fontSize="34px"
            textAlign="start"
            fontWeight="700"
            lineHeight="100%"
          >
            37.5K
          </Text>
          <Flex align="center" mb="20px">
            <Flex align="center">
              <Icon as={RiArrowUpSFill} color="green.500" me="2px" mt="2px" />
              <Text
                color="green.500"
                fontSize="sm"
                fontWeight="700"
                lineHeight="100%"
              >
                +2.45%
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          overflow="auto "
          ml="20px"
          alignItems="center"
          flex=""
          justifyContent="center"
          mt="auto"
          w="100%"
        >
          <AreaChart
            width={830}
            height={250}
            data={data30TotalUniqueVisitors}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pageViews"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </Box>
      </Flex>
    </Card>
  )
}
