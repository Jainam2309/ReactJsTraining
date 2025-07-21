import { useNavigate } from "react-router-dom"

export default function Support() {

    const nevigate = useNavigate();

    function changePage() {
        nevigate("/help")
    }

    function changeBack() {
        nevigate(-1);
    }
    return(
        <div>
            <h1 style={{color:"black"}} >This is a Support Page</h1>
            <button onClick={changePage} style={{marginRight:"15px"}}>Move to Help Page</button>
            <button onClick={changeBack}>Go Back</button>
        </div>
    )
}