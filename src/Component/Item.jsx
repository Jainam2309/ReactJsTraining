export default function Item() {
   function clickHandler() {
    console.log("Item was Added to in the cart");
   }
    return (
      <button onClick={clickHandler}>Add to cart</button>
      
    )
}