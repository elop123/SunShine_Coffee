import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './ProductDetail.module.scss';

export const ProductDetail = ({ addToCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:8081/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} Added to cart successfully!`);
    };

    return product ? (
        <div className={s.productDetailContainer}>
            <h2 className={s.productName}>{product.name}</h2>
            <div className={s.productContent}>
                <img src={product.image} alt={product.name} className={s.productImage} />
                <div className={s.descStyle}>
                    <p><strong>Roast Level:</strong> {product.roast}</p>
                    <p className={s.price}>{product.price} DKK</p>
                    <p className={s.description}>{product.description}</p>
                    <button className={s.buttonStyle} onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    ) : null;
};
