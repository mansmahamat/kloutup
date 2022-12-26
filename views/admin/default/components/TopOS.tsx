import {
  Box,
  Flex,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react"
import { useMemo } from "react"
import {
  ColumnInstance,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  UseTableColumnProps,
} from "react-table"

// Custom components
import Card from "../../../../components/card/Card"
import Menu from "../../../../components/menu/MainMenu"
import { TableProps } from "../variables/columnsData"
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts"

export default function TopOS(props: TableProps) {
  const { columnsData, tableData, topOS } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = topOS

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance
  initialState.pageSize = 10

  const textColor = useColorModeValue("secondaryGray.900", "white")
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100")

  const dataM = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ]

  console.log("HELO", data)

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Top Devices
        </Text>
        <Menu />
      </Flex>
      {/* <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index: number) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map(
                (
                  column: ColumnInstance & UseTableColumnProps<{}>,
                  index: number
                ) => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    pe="10px"
                    key={index}
                    borderColor={borderColor}
                  >
                    <Flex
                      justify="space-between"
                      align="center"
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color="gray.400"
                    >
                      {column.render("Header")}
                    </Flex>
                  </Th>
                )
              )}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row: any, index: number) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell: any, index: number) => {
                  let data
                  if (cell.column.Header === "Country") {
                    data = (
                      <Flex align="center">
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.row?.original?.os}
                        </Text>
                      </Flex>
                    )
                  } else if (cell.column.Header === "Visitors") {
                    data = (
                      <Flex align="center">
                        <Text
                          me="10px"
                          color={textColor}
                          fontSize="sm"
                          fontWeight="700"
                        >
                          {cell.row?.original?.visitors}
                        </Text>
                      </Flex>
                    )
                  } else if (cell.column.Header === "Page views") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.row?.original?.pageViews}
                      </Text>
                    )
                  } else if (cell.column.Header === "DATE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    )
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
      </Table> */}
      <SimpleGrid
        columns={{ base: 1, md: 1, xl: 1 }}
        width="100%"
        height="100%"
        minW={"100%"}
        gap="20px"
        mb="20px"
      >
        <Flex flex="" justify="center" align="center">
          <BarChart
            margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
            width={530}
            height={250}
            data={data}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="os" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visitors" fill="#8884d8" />
          </BarChart>
        </Flex>
      </SimpleGrid>
    </Card>
  )
}
