import { useNavigate } from "react-router-dom"


export default function Help() {

    const navigate = useNavigate();

    function changeHandler() {
       navigate("/route/about")
    }

    function changeBack () {
        navigate(-1);
    }
    return(
        <div>
           <h1 style={{color:"black"}}> This is Help Page</h1>
           <button onClick={changeHandler} style={{marginRight:"15px"}}>Move to above page</button>
           <button onClick={changeBack}>Go back</button>
        </div>
    )
}