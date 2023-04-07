import React from 'react'

function SearchFilter({query, handleSearch}) {
  return (
    <div>
      Search: <input type="text" value={query} onChange={event => handleSearch(event.target.value)} />
    </div>
  )
}

export default SearchFilter

