import React, { useEffect, useState } from 'react';
import s from './Product.module.scss'

export const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:8081/products');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data.slice(0, 6));
        } catch (error) {
          setError(error.message);
        } 
          setLoading(false);
        
      };
  
      fetchProducts();
    }, []);
  
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <section className={s.productContainer}>
        <h2 className={s.title}>Our picks for you</h2>
        <div className={s.productStyle}>
          {products.map((product) => (
            <div key={product.id} className={s.cardStyle} >
              <h3 className={s.productName}>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p>Roast: {product.roast}</p>
              <p className={s.price}>{product.price} DKK</p>
              <button className={s.buttonStyle}>Add to cart</button>
            </div>
          ))}
        </div>
      </section>
    );
  };