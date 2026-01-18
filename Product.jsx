import React, { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("electronics");

 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [category]);


  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <h2>Products</h2>

 
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
        <option value="men's clothing">Men's Clothing</option>
      </select>


      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

 
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

    
      {sortedProducts.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
          <img src={item.image} alt={item.title} width={150} />
        </div>
      ))}
    </div>
  );
}