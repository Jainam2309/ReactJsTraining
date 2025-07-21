import { useNavigate } from "react-router-dom"

export default function Home() {

    
const navigate = useNavigate()
function clickMove() {
    navigate("/support")
}

function changeBack() {
    navigate(-1);
}
    return(
        <div>
            <h1 style={{color:"black"}}>This is Home Page</h1>
            <button onClick={clickMove} style={{marginRight:"15px"}}>Go to Support Page</button>
            <button onClick={changeBack}>Go back</button>
        </div>
    )
}