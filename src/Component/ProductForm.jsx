import { useState } from "react";

export default function ProductForm() {

    const[title,setTitle] = useState("");
    const[date,setDate] = useState("");

    function titleChangeHandler(event) {
       setTitle(event.target.value);
    };

    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    // function submitHandler(event) {
    //     event.preventDefault();
    // }

     

        //  console.log(productData)
    
   
    return(
        <form>
            <div style={{marginBottom:"15px"}}>
            <label>Title : {title}</label>
            <input type="text" onChange={titleChangeHandler} />
            </div>

            <div style={{marginBottom:"15px"}}>
                <label>Date : {date} </label>
                <input type="date" onChange={dateChangeHandler} min="2025-01-01" max="2025-12-12" />
            </div>

            <div>
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}