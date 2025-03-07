import React, { useState, useEffect } from "react";
import "./style.css";

const groceryData = [
  { item: "Milk (1 liter)", supermarket: "ALDI", price: 400, image: "images/milk.jpg" },
  { item: "Milk (1 liter)", supermarket: "LIDL", price: 420, image: "images/milk.jpg" },
  { item: "Milk (1 liter)", supermarket: "SPAR", price: 410, image: "images/milk.jpg" },
  { item: "Bread (500g loaf)", supermarket: "ALDI", price: 500, image: "images/bread.jpg" },
  { item: "Bread (500g loaf)", supermarket: "LIDL", price: 520, image: "images/bread.jpg" },
  { item: "Bread (500g loaf)", supermarket: "SPAR", price: 510, image: "images/bread.jpg" },
  { item: "Eggs (12 pcs)", supermarket: "ALDI", price: 990, image: "images/eggs.jpg" },
  { item: "Eggs (12 pcs)", supermarket: "LIDL", price: 1000, image: "images/eggs.jpg" },
  { item: "Eggs (12 pcs)", supermarket: "SPAR", price: 995, image: "images/eggs.jpg" },
  { item: "Rice (1 kg)", supermarket: "ALDI", price: 800, image: "images/rice.jpeg" },
  { item: "Rice (1 kg)", supermarket: "LIDL", price: 820, image: "images/rice.jpeg" },
  { item: "Rice (1 kg)", supermarket: "SPAR", price: 810, image: "images/rice.jpeg" },
  { item: "Chicken (1 kg)", supermarket: "ALDI", price: 2200, image: "images/chicken.png" },
  { item: "Chicken (1 kg)", supermarket: "LIDL", price: 2250, image: "images/chicken.png" },
  { item: "Chicken (1 kg)", supermarket: "SPAR", price: 2230, image: "images/chicken.png" },
  { item: "Apples (1 kg)", supermarket: "ALDI", price: 600, image: "images/apples.jpg" },
  { item: "Apples (1 kg)", supermarket: "LIDL", price: 620, image: "images/apples.jpg" },
  { item: "Apples (1 kg)", supermarket: "SPAR", price: 610, image: "images/apples.jpg" },
  { item: "Bananas (1 kg)", supermarket: "ALDI", price: 650, image: "images/bananas.avif" },
  { item: "Bananas (1 kg)", supermarket: "LIDL", price: 670, image: "images/bananas.avif" },
  { item: "Bananas (1 kg)", supermarket: "SPAR", price: 660, image: "images/bananas.avif" },
  { item: "Oranges (1 kg)", supermarket: "ALDI", price: 700, image: "images/oranges.jpg" },
  { item: "Oranges (1 kg)", supermarket: "LIDL", price: 720, image: "images/oranges.jpg" },
  { item: "Oranges (1 kg)", supermarket: "SPAR", price: 710, image: "images/oranges.jpg" },
  { item: "Tomatoes (1 kg)", supermarket: "ALDI", price: 1000, image: "images/tomatoes.jpg" },
  { item: "Tomatoes (1 kg)", supermarket: "LIDL", price: 1050, image: "images/tomatoes.jpg" },
  { item: "Tomatoes (1 kg)", supermarket: "SPAR", price: 1030, image: "images/tomatoes.jpg" },
  { item: "Potatoes (1 kg)", supermarket: "ALDI", price: 400, image: "images/potatoes.jpg" },
  { item: "Potatoes (1 kg)", supermarket: "LIDL", price: 420, image: "images/potatoes.jpg" },
  { item: "Potatoes (1 kg)", supermarket: "SPAR", price: 410, image: "images/potatoes.jpg" },
  { item: "Onions (1 kg)", supermarket: "ALDI", price: 500, image: "images/onions.jpg" },
  { item: "Onions (1 kg)", supermarket: "LIDL", price: 520, image: "images/onions.jpg" },
  { item: "Onions (1 kg)", supermarket: "SPAR", price: 510, image: "images/onions.jpg" },
  { item: "Carrots (1 kg)", supermarket: "ALDI", price: 450, image: "images/carrots.jpg" },
  { item: "Carrots (1 kg)", supermarket: "LIDL", price: 470, image: "images/carrots.jpg" },
  { item: "Carrots (1 kg)", supermarket: "SPAR", price: 460, image: "images/carrots.jpg" },
  { item: "Pasta (500g)", supermarket: "ALDI", price: 400, image: "images/pasta.jpg" },
  { item: "Pasta (500g)", supermarket: "LIDL", price: 420, image: "images/pasta.jpg" },
  { item: "Pasta (500g)", supermarket: "SPAR", price: 410, image: "images/pasta.jpg" },
  { item: "Sugar (1 kg)", supermarket: "ALDI", price: 400, image: "images/sugar.jpg" },
  { item: "Sugar (1 kg)", supermarket: "LIDL", price: 420, image: "images/sugar.jpg" },
  { item: "Sugar (1 kg)", supermarket: "SPAR", price: 410, image: "images/sugar.jpg" },
  { item: "Cooking Oil (1 liter)", supermarket: "ALDI", price: 910, image: "images/cooking oil.png" },
  { item: "Cooking Oil (1 liter)", supermarket: "LIDL", price: 920, image: "images/cooking oil.png" },
  { item: "Cooking Oil (1 liter)", supermarket: "SPAR", price: 900, image: "images/cooking oil.png" },
  { item: "Butter (250g)", supermarket: "ALDI", price: 800, image: "images/butter.jpg" },
  { item: "Butter (250g)", supermarket: "LIDL", price: 820, image: "images/butter.jpg" },
  { item: "Butter (250g)", supermarket: "SPAR", price: 810, image: "images/butter.jpg" },
  { item: "Fish (0.5  kg)", supermarket: "ALDI", price: 4000, image: "images/fish.jpg" },
  { item: "Fish (0.5  kg)", supermarket: "LIDL", price: 4200, image: "images/fish.jpg" },
  { item: "Fish (0.5  kg)", supermarket: "SPAR", price: 4100, image: "images/fish.jpg" },
  { item: "Beef (0.5 kg)", supermarket: "ALDI", price: 5050, image: "images/beef.jpg" },
  { item: "Beef (0.5  kg)", supermarket: "LIDL", price: 5100, image: "images/beef.jpg" },
  { item: "Beef (0.5  kg)", supermarket: "SPAR", price: 5000, image: "images/beef.jpg" },
  { item: "White Chocolate (100g)", supermarket: "ALDI", price: 500, image: "images/chocolate.jpg" },
  { item: "White Chocolate (100g)", supermarket: "LIDL", price: 520, image: "images/chocolate.jpg" },
  { item: "White Chocolate (100g)", supermarket: "SPAR", price: 510, image: "images/chocolate.jpg" },
  { item: "Fanta Orange (500ml)", supermarket: "ALDI", price: 500, image: "images/fanta orange.png" },
  { item: "Fanta Orange (500ml)", supermarket: "LIDL", price: 499, image: "images/fanta orange.png" },
  { item: "Fanta Orange (500ml)", supermarket: "SPAR", price: 549, image: "images/fanta orange.png" },
  { item: "Strawberry Yoghurt (500ml)", supermarket: "ALDI", price: 500, image: "images/yoghurt.jpg" },
  { item: "Strawberry Yoghurt (500ml)", supermarket: "LIDL", price: 499, image: "images/yoghurt.jpg" },
  { item: "Strawberry Yoghurt  (500ml)", supermarket: "SPAR", price: 549, image: "images/yoghurt.jpg" }
];

const getCheapestProducts = (products) => {
  const cheapestProducts = new Map();
  products.forEach((product) => {
    if (!cheapestProducts.has(product.item) || product.price < cheapestProducts.get(product.item).price) {
      cheapestProducts.set(product.item, product);
    }
  });
  return Array.from(cheapestProducts.values());
};

const selectedTopDeals = ["Milk (1 liter)", "Bread (500g loaf)", "Eggs (12 pcs)", "Rice (1 kg)"];

const getTopDeals = (products) => {
  return getCheapestProducts(products).filter((product) => selectedTopDeals.includes(product.item));
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(getCheapestProducts(groceryData));
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(getCheapestProducts(groceryData));
    } else {
      const filtered = groceryData.filter((product) => product.item.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredProducts(getCheapestProducts(filtered));
    }
  }, [searchTerm]);

  useEffect(() => {
    if (filteredProducts.length > 1) {
      const interval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
      }, 3000); // Change this time as needed for smoother scrolling
      return () => clearInterval(interval);
    }
  }, [filteredProducts]);

  // Find the cheapest product from the filtered list
  const cheapestProduct = filteredProducts.length > 0 ? filteredProducts[0] : null;

  return (
    <div className="app">
      <h1>Grocery Price Comparison</h1>
      <input
        type="text"
        placeholder="Enter product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {cheapestProduct && (
        <div className="cheapest-product">
          <h2>Cheapest {cheapestProduct.item}:</h2>
          <p>
            HUF {cheapestProduct.price} at {cheapestProduct.supermarket}
          </p>
        </div>
      )}

      <div className="carousel-container">
        {filteredProducts.length > 0 ? (
          <div className="carousel" style={{ transform: `translateX(-${carouselIndex * 220}px)` }}>
            {filteredProducts.map((product, index) => (
              <div key={index} className={`product ${index === carouselIndex ? "active" : ""}`}>
                <img src={product.image} alt={product.item} />
                <p><strong>{product.item}</strong></p>
                <p>HUF {product.price} at {product.supermarket}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>

      <h2>Top Deals</h2>
      <div className="top-deals">
        {getTopDeals(groceryData).map((deal, index) => (
          <div key={index} className="deal">
            <img src={deal.image} alt={deal.item} />
            <p><strong>{deal.item}</strong></p>
            <p>HUF {deal.price} at {deal.supermarket}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
