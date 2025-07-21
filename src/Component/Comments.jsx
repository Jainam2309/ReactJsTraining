import { useState } from "react";

export default function Comments() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give me a comment</h4>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br /> <br />

        <textarea
          name="remarks"
          value={formData.remarks}
          placeholder="Add few remarks"
          onChange={handleInputChange}
        />
        <br /> <br />

        <input
          name="rating"
          placeholder="Rating"
          type="number"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br /> <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
