import { useEffect, useState } from "react"

export default function Toogle() {

const[darkMode,setDarkMode] = useState(false);

useEffect( () => {
  document.body.style.backgroundColor = darkMode ? "#121212" : "#FFFFFF";
  document.body.style.color = darkMode ? "ffffff" : "#000000"; 

},[darkMode]);

const label = darkMode ? "Switch To Light Mode" : "Switch To Dark Mode";



  return(
    <div>
      <h1>{darkMode ? "Dark Mode" : "Light Moded"}</h1>
      <button onClick={() => setDarkMode((prev) => !prev)}>{label}</button>
    </div>
  )
}