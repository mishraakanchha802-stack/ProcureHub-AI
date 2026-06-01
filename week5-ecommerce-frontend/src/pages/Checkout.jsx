function Checkout() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center"
      }}
    >
      <h1>Checkout Page 💳</h1>

      <h2>Order Placed Successfully ✅</h2>

      <p>Thank you for shopping with us.</p>
      ,<button
  onClick={() => {
    localStorage.removeItem("cartItems");
    window.location.href = "/";
  }}
  style={{
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Place Order
</button>
    </div>
  );
}

export default Checkout;