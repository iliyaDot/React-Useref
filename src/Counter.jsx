import React, { useState, useEffect, useRef } from 'react'

export default function Counter() {

    const [count , setCount] = useState(0)

const countRef=useRef(count)

useEffect(() =>{

const diff= count - countRef.current;

console.log(`diff ${diff}`);

countRef.current = count
// setTimeout(() =>{
//     console.log(countRef.current);
// },2000)
})

    return (
        <div>
            <p style={{ color: '#fff' }}>click count is {count}</p>

            <button onClick={()=> setCount(count +1)}> click !</button>
            <button onClick={()=> setCount(count +2)}> click !</button>
            <button onClick={()=> setCount(count +3)}> click !</button>
   
        </div>
    )
}
