import React, { useMemo ,useEffect,useState} from 'react'
import { useTable, useGlobalFilter , usePagination, useFilters } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
import { ColumnFilter } from './ColumnFilter'
import axios from 'axios';
import './table.css'

const PaginationTable = () => {
  const [loading,setLoading]=useState(false);
  const [users,setUsers]=useState([]);
  useEffect(() => {
    const fetchData = async () =>{
        setLoading(true);
        const res =await axios.get('https://breakingbadapi.com/api/characters')
        console.log(res.data)
        setUsers(res.data)
        setLoading(false);
    }
    fetchData();
    }, [])
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => users, [users])
  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      defaultColumn
    },
    useGlobalFilter,
    useFilters,
    usePagination,
  )

  const { pageIndex, pageSize,globalFilter  } = state
  if(loading){
    return(<h1>Loading</h1>)
}
  return (
    <>
    <div className="search">
        <h3>The Data is taken from <span style={{textTransform:'uppercase'}}>Breaking Bad</span> Api</h3>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
    </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="controls">
          <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                Previous
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                Next
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
                </button>{' '}
        </div>
        <div> <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        </div>
       
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[5, 10, 15].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default PaginationTable;