import { Link } from "react-router-dom";
function Cart({
  cartItems,
  removeFromCart,
  totalPrice,
  increaseQuantity,
  decreaseQuantity
}) {

  return (
    <div
      style={{
        padding: "40px"
      }}
    >

      <h1>Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (

        <h3>Cart is Empty 😭</h3>

      ) : (

        cartItems.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid gray",
              marginTop: "15px",
              padding: "15px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >

            <div>

  <h3>{item.name}</h3>

  <p>₹{item.price}</p>

  <div
    style={{
      display: "flex",
      gap: "10px",
      alignItems: "center"
    }}
  >

    <button
      onClick={() => decreaseQuantity(index)}
    >
      -
    </button>

    <span>{item.quantity}</span>

    <button
      onClick={() => increaseQuantity(index)}
    >
      +
    </button>

  </div>

  <p>
    Subtotal: ₹{item.price * item.quantity}
  </p>

</div>

            <button
              onClick={() => removeFromCart(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>

          </div>

        ))

      )}

      <h2
        style={{
          marginTop: "30px"
        }}
      >
        Total: ₹{totalPrice}
      </h2>

      <Link to="/checkout">
  <button
    style={{
      marginTop: "20px",
      padding: "12px 20px",
      background: "green",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer"
    }}
  >
    Checkout
  </button>
</Link>

    </div>
  );
}

export default Cart;