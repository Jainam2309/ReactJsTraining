import { useState } from "react"
import data from "./data.js"
import Tours from "./Tours";

export default function City() {

    const[tours,setTours] = useState(data);

    function removeTour(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }
    
    return(
        <div>
            <h2>City Details</h2>
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    )
}