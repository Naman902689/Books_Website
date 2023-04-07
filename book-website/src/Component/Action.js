import React, { useState, useEffect } from 'react'
import NewRecord from './NewRecord.json'
import Booktile from './Booktile';
import './Booktile.css';
import SearchFilter from './SearchFilter';

const Action = () => {
  const [query, setQuery] = useState('');
  const [cardData, setCardData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    const data = NewRecord.filter(list => {
      console.log(list.action)

      return list.action;
    })
    setCardData(data[0].action)
    setIsLoading(false);

  }, []);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm)
    let data = cardData.filter((card) =>

      card.title.toLowerCase().includes(searchTerm.toLowerCase())

    );
    console.log({ data})
    setCardData(data)
  }



  return (
    <div>
      <SearchFilter query={query} handleSearch={handleSearch} />
      <ul className='ulContainer'>
        {isLoading ? <div></div> :
          cardData.map((item) => (
            <Booktile key={item.id} title={item.title} imgscr={item.imgscr} des={item.des} />
          ))}

      </ul>
    </div>
  )
}

export default Action
