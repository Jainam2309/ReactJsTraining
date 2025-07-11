import { useState } from "react";

export default function Card({ id, city, info, price, removeTour }) {
  const [readmore, setreadmore] = useState(false);
  const description = `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setreadmore(!readmore);
  }

  return (
    <div>
      <h4>{city}</h4>
      <h4>{price}</h4>
      <p>{readmore ? info : description}</p>
      <span onClick={readmoreHandler}>
        {readmore ? "show less" : "read more"}
      </span>
      <br />
      <button onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
}
