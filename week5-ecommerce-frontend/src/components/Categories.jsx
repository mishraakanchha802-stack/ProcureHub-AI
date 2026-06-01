function Categories() {

  const items = [
    "Electronics",
    "Fashion",
    "Shoes",
    "Watches",
  ];

  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center"
      }}
    >

      <h1
        style={{
          fontSize: "40px"
        }}
      >
        Categories
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap"
        }}
      >

        {items.map((item, index) => (

          <div
            key={index}
            style={{
              background: "#eee",
              padding: "20px",
              borderRadius: "10px",
              minWidth: "120px"
            }}
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;