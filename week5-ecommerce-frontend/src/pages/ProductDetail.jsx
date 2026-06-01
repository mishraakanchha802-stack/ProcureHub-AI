import { useParams } from "react-router-dom";

function ProductDetail({ addToCart }) {

  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      description: "Premium smartwatch with amazing features."
    },

    {
      id: 2,
      name: "Headphones",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      description: "Wireless headphones with crystal clear sound."
    },

    {
      id: 3,
      name: "Shoes",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      description: "Comfortable sports shoes for everyday use."
    }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <h1>{product.name}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <button
      onClick={() => addToCart(Product)}
        style={{
          padding: "10px 20px",
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

export default ProductDetail;