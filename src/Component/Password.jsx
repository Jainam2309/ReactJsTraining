import { useEffect, useState } from "react"

export default function Password() {


const[showPassword,setShowPassword] = useState(false);
const[password,setPassword] = useState("");


useEffect(() => {
    console.log(showPassword? "Password is show" : "Password id hide");
},[showPassword]);

const toogleVisibility = () => {
    setShowPassword(prev => !prev);
}

const placeholder = "Enter your password";



    return(
        <div>
            <h1>Show/Hide Password</h1>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={placeholder}/>
            <button onClick={toogleVisibility} ></button>
        </div>
    )
}