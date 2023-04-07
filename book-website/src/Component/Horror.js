import React, { useState , useEffect } from 'react'
import Booktile from './Booktile'
import NewRecord from './NewRecord.json'
import './Booktile.css';
import SearchFilter from './SearchFilter';

function Horror() {
  const [query, setQuery] = useState('');
  const [handleSearch, setHandleSearch] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const data = NewRecord.filter(list => {

     return list.horror;
    })
    setHandleSearch(data[0].horror)
    setIsLoading(false);

  })

  const handleSearch2 = handleSearch.filter((searchTerm) =>

    searchTerm.title.toLowerCase().includes(query.toLowerCase())

  );
  return (
    <div>
    <SearchFilter query={query} setQuery={setQuery}/>
    <ul className='ulContainer'>
        {isLoading ? <div></div> :
          handleSearch2.map((item) => (

            <Booktile key={item.id} title={item.title} imgscr={item.imgscr} des={item.des} />
          ))}

      </ul>
  </div>
  )
}

export default Horror
