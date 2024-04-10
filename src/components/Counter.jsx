import React,{ useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increase = () => {
    setCount(count+1);
  }
  const decrease = () => {
    setCount(count-1);
  }
  return (
    <div className="counter">
      <h>Counter 1</h>
      <hr></hr>
      <p>{count}</p>
      <button onClick={decrease}>-1</button>
      <button onClick={increase}>+1</button>
    </div>
  )
}

export default Counter
