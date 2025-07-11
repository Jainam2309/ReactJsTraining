import { useContext } from "react";
import { CartContext } from "./CartContext";



export default function Cart() {

    const{cart,dispatch} = useContext(CartContext);
     const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


     return (
    <div>
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={styles.item}>
            <span>
              {item.name} - ₹{item.price} x
              <input
                type="number"
                value={item.qty}
                min={1}
                onChange={e =>
                  dispatch({
                    type: "CHANGE_QTY",
                    id: item.id,
                    qty: Number(e.target.value)
                  })
                }
              />
            </span>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}>
              ❌ Remove
            </button>
          </div>
        ))
      )}
      <h3>Total: ₹{total}</h3>
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
    borderRadius: "8px"
  }
};


