function App() {
  const products = [
    { id: 101, title: "Apple iPhone 15", price: 285000, status: true },
    { id: 102, title: "Samsung Galaxy S24", price: 245000, status: true },
    { id: 103, title: "Dell XPS 13 Laptop", price: 395000, status: false },
    { id: 104, title: "Sony WH-1000XM5 Headphones", price: 98000, status: true },
    { id: 105, title: "Apple Watch Series 9", price: 145000, status: true },
    { id: 106, title: "LG 55-inch 4K Smart TV", price: 210000, status: false },
  ];

  const average =
    products.reduce((sum, p) => sum + p.price, 0) / products.length;

  return (
    <div>
      <h1>Products Assignment</h1>

      <h2>1. Low to High</h2>
      {[...products]
        .sort((a, b) => a.price - b.price)
        .map(p => (
          <p key={p.id}>{p.title} - Rs. {p.price}</p>
        ))}

      <h2>2. Price &gt; 45000 (High to Low)</h2>
      {products
        .filter(p => p.price > 45000)
        .sort((a, b) => b.price - a.price)
        .map(p => (
          <p key={p.id}>{p.title} - Rs. {p.price}</p>
        ))}

      <h2>3. Price +10%</h2>
      {products
        .map(p => ({ ...p, price: Math.round(p.price * 1.1) }))
        .map(p => (
          <p key={p.id}>{p.title} - Rs. {p.price}</p>
        ))}

      <h2>4. Starts with A</h2>
      {products
        .filter(p => p.title.toLowerCase().startsWith("a"))
        .map(p => (
          <p key={p.id}>{p.title}</p>
        ))}

      <h2>5. Top 3 Most Expensive</h2>
      {[...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 3)
        .map(p => (
          <p key={p.id}>{p.title} - Rs. {p.price}</p>
        ))}

      <h2>6. Above/Below Average</h2>
      {products.map(p => (
        <p key={p.id}>
          {p.title} - Rs. {p.price} (
          {p.price >= average ? "Above Average" : "Below Average"})
        </p>
      ))}
    </div>
  );
}

export default App;