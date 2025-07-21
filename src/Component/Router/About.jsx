import { useNavigate } from "react-router-dom"

export default function About() {

    const navigate = useNavigate();

    function clickHandler() {
        navigate("/home")
    }
    function changeBack() {
        navigate(-1);
    }
    return(
        <div>
           <h1 style={{color:"black"}}> This is a About Page </h1>
           <button onClick={clickHandler} style={{marginRight:"15px"}}>Go to Home Page</button>
           <button onClick={changeBack}>Go back</button>
        </div>
    )
}