// import { useState,useEffect } from "react"

import { useState } from "react"



// export default function Counter() {
//     const[count,setCount] = useState(0);
//     const increment = () => {
//             setCount(count+1)
//         }
//         const decrement = () => {
//             setCount(count-1)
//         }

//         const reset = () => {
//             setCount(0)
//         }
//     return(
//         <>
//            <p style={{backgroundColor:"black", color:"white"}}>Count {count} </p>
//             <button onClick={increment} style={{marginRight:"15px" , backgroundColor:"yellow", color:"black"} }>+</button>
//             <button onClick={decrement} style={{marginRight:"15px", backgroundColor:"green", color:"black"}}>-</button>
//             <button onClick={reset}>reset</button>
//         </>
//     )
// } 



export default function Counter() {

    const[count,setCount] = useState(0);

    function increment () {
        setCount(count+1);
    }

    function decrement() {
        setCount(count-1);
    }

    function reset() {
        setCount(0);
    }

    return(
        <div>
            <p>Count {count}</p>
            <button onClick={increment} style={{marginRight:"10px"}}>+</button>
            <button onClick={reset}  style={{marginRight:"10px"}}>Reset</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}


