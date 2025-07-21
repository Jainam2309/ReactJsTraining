import { useState } from "react"



export default function RandomNumber() {

    const[number,setNumber] = useState(null);

    const  generate = () => {
        const random = Math.floor(Math.random() * 100) + 1;
        setNumber(random)
    }
    return(
        <div>
        <h2>Random Number Generator</h2>
        <div>{number !== null ? number : 'click generator'}</div>
        <button onClick={generate}>Generate</button>
        </div>

    )
}