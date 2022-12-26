import { Column } from "react-table"
import tableDataCheck from "./tableDataCheck.json"

export const columnsDataCheck = [
  {
    Header: "Country",
    accessor: "Country",
  },
  {
    Header: "Visitors",
    accessor: "Visitors",
  },
  {
    Header: "Page views",
    accessor: "Page views",
  },
  // {
  //   Header: "DATE",
  //   accessor: "date",
  // },
]
export const columnsDataComplex = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "DATE",
    accessor: "date",
  },
  {
    Header: "PROGRESS",
    accessor: "progress",
  },
]

export type ColumnData = Column[]

export type TableData = Column<{
  name: (string | boolean)[]
  date: string
  progress: number
  quantity?: number
  status?: string
  artworks?: string
  rating?: number
}>

export type TableProps = {
  columnsData: ColumnData
  tableData: TableData[]
  dataTotalUniqueVisitorsCountry?: any
  topSourcesData?: any
  topOS?: any
}
