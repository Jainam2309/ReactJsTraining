import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";




export default function ProductList() {


    const{dispatch} = useContext(CartContext);
    const[products,setProducts] = useState([]);
    const[loading,setLoading] =useState(true);
    const[showform,setShowform]=useState(false);
    const[name,setName]=useState("");
    const[des,setDes] = useState("");
    const[price,setPrice] = useState("");


    function newdata() {
        setName("");
        setDes();
        setPrice();
    }
    console.log(newdata);
    
    


    useEffect(() => {
        async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
    },[]);

    function Showform() {
      setShowform(true);
    }


    return (
    <div>
        <button onClick={Showform} style={styles.form}>Add</button>
        {showform ? <>
        <label>Name : </label>
        <input type="name" onChange={(e) => setName(e.target.value)}   />
        <br></br> <br></br>
        <label>Description : </label>
        <textarea>write something...</textarea>
         <br></br>  <br></br>
        <label>Price : </label>
        <input type="price" />
         <br></br>  <br></br>
        <button onClick={newdata}>Save</button>

        </>:<>no data found</>}
      <h2>🛍 Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        products.map(product => (
          <div key={product.id} style={styles.item}>
             <div className="zoom-wrapper" style={styles.imageWrapper}>
    <img src={product.image} alt={product.title} style={styles.image} />
  </div>
            <div  style={{ flex: 1, marginLeft: "10px" }}>
              <strong>{product.title}</strong>
              <p>₹{product.price}</p>
            </div>
            <button onClick={() => dispatch({ type: "ADD_TO_CART", item: product })}>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    alignItems: "center"
  },
  image: {
    width: "60px",
    height: "60px",
    objectFit: "contain"
  },
  imageWrapper: {
    overflow: "hidden", // Ensures zoom doesn’t overflow the box
    width: "60px",
    height: "60px"
  },
  form :{
    display : "flex",
  }
};