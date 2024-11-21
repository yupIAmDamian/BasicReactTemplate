import React, {useState} from 'react'

//this will import css and you can use it
import "./index.css"

const Things = () => {
  //working with variables. you cannot use normal variables for updating elements in React
  //you need hooks to change something 
  const [count, setCount] = useState(0)
  let num = 0;

  const incrementFunc = ()=>{
    setCount(count+1)
    num += 1
    console.log(`React count: ${count}`)
    console.log(`variable count: ${num}`)
  }

  return (
    <div className='bg'>
      <h1>React count: {count}</h1>
      <h1>Variable count: {num}</h1>
      <button onClick={incrementFunc}>Increment</button>
    </div>
  )
}

export default Things