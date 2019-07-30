import React from 'react';
import ReactDOM from 'react-dom';
import SimilarProductsCarousel from './components/SimilarProductsCarousel.js';

const PRODUCTS = [
    { image: './images/product/product-item-4-1-138w.png', price: '99.95', name: 'Hoody Quiksilver White' },
    { image: './images/product/product-item-7-1-138w.png', price: '79.99', name: 'Jacket DC White' },
    { image: './images/product/product-item-1-1-138w.png', price: '49.50', name: 'Hoody DC Orange' },
    { image: './images/product/product-item-5-1-138w.png', price: '59.99', name: 'Jacket DC Street Fashion Black' },
    { image: './images/product/product-item-3-1-138w.png', price: '49.50', name: 'Longslive Quiksilver White/Red' }
];


ReactDOM.render(<SimilarProductsCarousel products={PRODUCTS} />, document.getElementById('similar-goods-carousel-wrap'));