import { useEffect, useState } from "react"


const label = "Enter Your Message:"
export default function LiveCharacterCount() {
    const[text,setText] = useState("");


useEffect( () => {
    document.title =  `Character Count: ${text.length}`;
},[text]);



const handleChange = (e) => {
    setText(e.target.value);
}

    return (
        <div>
            <h1>Live Character</h1>
            <label>{label}</label>
            <input onChange={handleChange} type="text" value={text} style={{marginLeft:"15px"}} />
           <p>Characters: {text.replace(/\s/g, "").length}</p>
        </div>
    )
}