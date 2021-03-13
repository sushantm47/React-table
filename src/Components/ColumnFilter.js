import React from 'react'

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <span style={{fontSize:'0.6rem'}}>
      Search:{' '}
      <input
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
}