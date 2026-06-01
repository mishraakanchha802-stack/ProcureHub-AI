import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        textAlign: "center"
      }}
    >

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.name}
          width="200"
          height="200"
          style={{
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />

      </Link>

      <h2>{product.name}</h2>

      <h3>₹{product.price}</h3>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;