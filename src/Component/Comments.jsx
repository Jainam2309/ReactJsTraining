import { useState } from "react"

export default function Comments() {
    let [formData,setFormData] = useState({
        username:"",
        remarks:"",
        rating: 5
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData,[event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
        username:"",
        remarks:"",
        rating: 5
        })
    }
    return(
        <div>
            <h4>give me comment</h4>
            <form onSubmit={handleSubmit}>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange}/>
                <br></br>   <br></br>

                <textarea value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange}>Remarks</textarea>
                <br></br>   <br></br>

                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange}/>
                <br></br>   <br></br>

                <button>Add Comment</button>
            </form>
        </div>
    )
}