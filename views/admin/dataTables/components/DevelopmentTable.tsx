/* eslint-disable */
import {
  Flex,
  OmitCommonProps,
  Progress,
  Table,
  TableColumnHeaderProps,
  TableRowProps,
  TableCellProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react"
// Custom components
import Card from "../../../../components/card/Card"
import {
  AndroidLogo,
  AppleLogo,
  WindowsLogo,
} from "../../../../components/icons/Icons"
import Menu from "../../../../components/menu/MainMenu"
import React, { useEffect, useMemo, useState } from "react"
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  //@ts-ignore
} from "react-table"
import { TableProps } from "../../../../views/admin/default/variables/columnsData"

export default function DevelopmentTable(props: TableProps) {
  const { columnsData, tableData } = props

  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

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
  initialState.pageSize = 11

  const textColor = useColorModeValue("secondaryGray.900", "white")
  const iconColor = useColorModeValue("secondaryGray.500", "white")
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100")

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isMounted) return
    setIsMounted(true)
  }, [isMounted])

  if (!isMounted) return <></>

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Development Table
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map(
            (
              headerGroup: {
                getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                  OmitCommonProps<
                    React.DetailedHTMLProps<
                      React.HTMLAttributes<HTMLTableRowElement>,
                      HTMLTableRowElement
                    >,
                    keyof TableRowProps
                  > &
                  TableRowProps & { as?: "tr" | undefined }
                headers: any[]
              },
              index: React.Key | null | undefined
            ) => (
              <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map(
                  (
                    column: {
                      getHeaderProps: (
                        arg0: any
                      ) => JSX.IntrinsicAttributes &
                        OmitCommonProps<
                          React.DetailedHTMLProps<
                            React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
                            HTMLTableHeaderCellElement
                          >,
                          keyof TableColumnHeaderProps
                        > &
                        TableColumnHeaderProps & { as?: "th" | undefined }
                      getSortByToggleProps: () => any
                      render: (
                        arg0: string
                      ) =>
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined
                    },
                    index: React.Key | null | undefined
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
            )
          )}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map(
            (
              row: {
                getRowProps: () => JSX.IntrinsicAttributes &
                  OmitCommonProps<
                    React.DetailedHTMLProps<
                      React.HTMLAttributes<HTMLTableRowElement>,
                      HTMLTableRowElement
                    >,
                    keyof TableRowProps
                  > &
                  TableRowProps & { as?: "tr" | undefined }
                cells: any[]
              },
              index: React.Key | null | undefined
            ) => {
              //@ts-ignore
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()} key={index}>
                  {row.cells.map(
                    (
                      cell: {
                        column: { Header: string }
                        value:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | React.ReactFragment
                          | null
                          | undefined
                        getCellProps: () => JSX.IntrinsicAttributes &
                          OmitCommonProps<
                            React.DetailedHTMLProps<
                              React.TdHTMLAttributes<HTMLTableDataCellElement>,
                              HTMLTableDataCellElement
                            >,
                            keyof TableCellProps
                          > &
                          TableCellProps & { as?: "td" | undefined }
                      },
                      index: React.Key | null | undefined
                    ) => {
                      let data
                      if (cell.column.Header === "NAME") {
                        data = (
                          <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="700"
                          >
                            {cell.value}
                          </Text>
                        )
                      } else if (cell.column.Header === "TECH") {
                        data = (
                          <Flex align="center">
                            {/* @ts-ignore */}

                            {cell?.value.map((item: string, key: number) => {
                              if (item === "apple") {
                                return (
                                  <AppleLogo
                                    key={key}
                                    color={iconColor}
                                    me="16px"
                                    h="18px"
                                    w="15px"
                                  />
                                )
                              } else if (item === "android") {
                                return (
                                  <AndroidLogo
                                    key={key}
                                    color={iconColor}
                                    me="16px"
                                    h="18px"
                                    w="16px"
                                  />
                                )
                              } else if (item === "windows") {
                                return (
                                  <WindowsLogo
                                    key={key}
                                    color={iconColor}
                                    h="18px"
                                    w="19px"
                                  />
                                )
                              }
                            })}
                          </Flex>
                        )
                      } else if (cell.column.Header === "DATE") {
                        data = (
                          <Text
                            color={textColor}
                            fontSize="sm"
                            fontWeight="700"
                          >
                            {cell.value}
                          </Text>
                        )
                      } else if (cell.column.Header === "PROGRESS") {
                        data = (
                          <Flex align="center">
                            <Text
                              me="10px"
                              color={textColor}
                              fontSize="sm"
                              fontWeight="700"
                            >
                              {cell.value}%
                            </Text>
                            <Progress
                              variant="table"
                              colorScheme="brandScheme"
                              h="8px"
                              w="63px"
                              //@ts-ignore

                              value={cell.value}
                            />
                          </Flex>
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
                    }
                  )}
                </Tr>
              )
            }
          )}
        </Tbody>
      </Table>
    </Card>
  )
}
