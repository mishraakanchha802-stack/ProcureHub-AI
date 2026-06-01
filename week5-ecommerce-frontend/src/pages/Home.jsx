import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

function Home({
  products,
  addToCart,
  search
}) {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Hero />

      <Categories />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "40px"
        }}
      >

        {filteredProducts.map((product) => (

         <ProductCard
  key={product.id}
  product={product}
  addToCart={addToCart}
/> 
          

        ))}

      </div>

    </div>
  );
}

export default Home;