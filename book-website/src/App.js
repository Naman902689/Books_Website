import './App.css';
import React from 'react'
import { Routes,Route} from "react-router-dom";
import Action from './Component/Action';
import Classics from './Component/Classics';
import Comic from './Component/Comic';
import Fantasy from './Component/Fantasy';
import Horror from './Component/Horror';
import Navbar from './Component/Navbar';
import NewBookTile from './Component/NewBookTile';
import SearchFilter from './Component/SearchFilter';


function App() {
  return (
    <>
    <div>
      <Navbar />
      
    <Routes>
        <Route path='/home' element={<SearchFilter/>} />
        <Route path="/Action" element={<Action />}/>
        <Route path="/Classics" element={<Classics />}/>
        <Route path="/Comic" element={<Comic/>}/>
        <Route path="/Fantasy" element={<Fantasy/>}/>
        <Route path="/Horror" element={<Horror />}/>
        <Route path="/NewBookTile" element={<NewBookTile />}/>

        </Routes>
    </div>
    </>
  )
}

export default App

