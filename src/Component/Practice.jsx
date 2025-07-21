// import   { useReducer } from "react";

import { useEffect, useState } from "react"

// import { useEffect, useState } from "react"




// function reducer(state,action) {
//     switch(action.type) {
//         case "increment" :
//             return{count:state.count+1};
//             case "decrement" :
//                 return{count:state.count-1};
//                 case "reset" :
//                     return{count:0};
//                     default :
//                     return state;
//     }
// }

// export default function Practice() {
//     const[state,dispatch] = useReducer(reducer,{count:0});

//     return(
//         <div>
//             <h2>Count:{state.count}</h2>
//             <button onClick={() => dispatch({type:"increment"})}>Increment</button>
//             <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
//             <button onClick={() => dispatch({type:"reset"})}>Reset</button>
//         </div>
//     )
// }

// const themeReducer = (state,action) => {
//     switch(action.type) {
//         case "TOGGLE_THEME" :
//         return{dark:!state.dark};
//         default:
//             return state;
//     }
// }


// export default function Practice() {
//     const[state,dispatch] = useReducer(themeReducer,{dark:false});
//     return(
//         <div style={{ background: state.dark ? "#333" : "#eee", color: state.dark ? "#fff" : "#000", padding: 20 }}>
//             <h2>{state.dark?"🌙 Dark Mode" : "☀️ Light Mode"}</h2>
//             <button onClick={() => dispatch({type:"TOGGLE_THEME"})}>Toggle Theme</button>
//         </div>
//     )
// }

// import { useState } from "react";

// export default function AddProductForm() {
//   const [showform, setShowForm] = useState(false);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProducts] = useState([]);

//   const Showform = () => {
//     setShowForm(!showform);
//   };

//   const newdata = () => {
//     if (!name || !description || !price) {
//       alert("Please fill all fields");
//       return;
//     }

//     const newProduct = {
//       id: Date.now(),
//       name,
//       description,
//       price: parseFloat(price)
//     };

//     setProducts(prev => [...prev, newProduct]);

//     // Clear form
//     setName("");
//     setDescription("");
//     setPrice("");
//     setShowForm(false); // Optional: hide form after saving
//   };

//   return (
//     <div style={styles.wrapper}>
//       <button onClick={Showform} style={styles.button}>
//         {showform ? "Cancel" : "Add"}
//       </button>

//       {showform && (
//         <div style={styles.form}>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={e => setName(e.target.value)}
//             style={styles.input}
//           />

//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={e => setDescription(e.target.value)}
//             style={styles.textarea}
//           />

//           <label>Price:</label>
//           <input
//             type="number"
//             value={price}
//             onChange={e => setPrice(e.target.value)}
//             style={styles.input}
//           />

//           <button onClick={newdata} style={styles.saveButton}>Save</button>
//         </div>
//       )}

//       <hr />

//       <h3>📦 Saved Products</h3>
//       {products.length === 0 ? (
//         <p>No products added yet.</p>
//       ) : (
//         products.map(product => (
//           <div key={product.id} style={styles.productBox}>
//             <strong>{product.name}</strong> – ₹{product.price}
//             <p>{product.description}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// const styles = {
//   wrapper: {
//     fontFamily: "Arial"
//   }};


// export default function Practice() {
// const[text,setText] = useState("")


// // First Variation -> Every Render
// useEffect( () => {
//   console.log("UI RENDERING DONE")
// })

// const[name,setName] = useState("jainam");

//Second Variation -> Every Render
// useEffect ( () => {
//   console.log("UI RENDERING DONE");
// },[]);

//Third Variation -> Fisrt Render + whenever dependency changes
// useEffect(() => {
//   console.log("Patel is King")
// },[name]);


// 4th Variation -> to handle unmounting of a component

// useEffect( () => {
//   console.log("listner added");

//   return() =>
//     console.log("listner removed");
  
// },[text]);

//   function changeHandler(event) {
//    console.log(text);
//    setText(event.target.value)
//   }
//   return(
//     <div>
//       <h3>Hello Jainam</h3>
//       <input type="text" onChange={changeHandler}/>
//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react';

// export default function Practice() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     console.log("Component mounted");

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(res => res.json())
//       .then(json => setData(json));
//   }, []);

//   return (
//     <div>
//       <h1>Fetched Post</h1>
//       {data ? <p>{data.title}</p> : <p>Loading...</p>}
//     </div>
//   );
// }


// Every Render
// import { useEffect, useState } from "react"
// export default function Practice() {

//   const[count,setCount] = useState(0);

//   useEffect( () => {
//     console.log("component rendered or re-rendered")
//   });
//   return(
//    <div>
//     <p>Count = {count}</p>
//     <button onClick={() => setCount(count+1)}>Increment</button>
//    </div>
//   )
// }


//specific value changes

// export default function Practice() {

//   const[count,setCount] = useState(0);
//   const[name,setName] = useState("");
   
//   useEffect( () => {
//     console.log("Name changed" , name);
//   },[name]);

//   return(
//     <div>
//       <input value={name} onChange={e=>setName(e.target.value)} placeholder="type your name"/>
//       <button onClick={() => setCount(count+1)}>Click me!</button>
//     </div>
//   )
// }




// export default function Practice() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Setting interval");

//     const interval = setInterval(() => {
//       setCount(c => c + 1);
//     }, 1000);

//     // Cleanup: runs when component unmounts or before effect re-runs
//     return () => {
//       console.log("Clearing interval");
//       clearInterval(interval);
//     };
//   }, []); // Run once

//   return <h1>Timer: {count}</h1>;
// }


export default function Practice() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    const randomColor = getRandomColor();
    setBgColor(randomColor);
  }, [count]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const styles = {
    backgroundColor: bgColor, 
    padding: "50px",
    textAlign: "center",
    height: "100vh",
    transition: "background-color 0.5s ease"
  };

  return (
    <div style={styles}>
      <h1>Button Action: {count} times</h1>
      <button onClick={handleClick} style={{ padding: "10px 20px" }}>
        Click Me
      </button>
    </div>
  );
}
