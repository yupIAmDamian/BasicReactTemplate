import { useState } from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './Home'
import Missing from './Missing'
import Things from './Things'


//common concepts and hooks: useState, useEffect, components, jsx, fragments
//you can study it here
//https://www.geeksforgeeks.org/reactjs-basics-concepts-complete-reference/

const App = () => {
  return (
    <div>
      <h1>pos</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/things" element={<Things/>}/>
          <Route exact path="*" element={<Missing/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
