import {
  Flex,
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

export default function TopSource(props: TableProps) {
  const { columnsData, tableData, topSourcesData } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = topSourcesData

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
          Top Sources
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
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
                          {cell.row?.original?.source}
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
      </Table>
    </Card>
  )
}
