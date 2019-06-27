import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import Cart from './components/Cart.js';
import LogIn from './components/LogIn.js';


ReactDOM.render (
    <SearchBar profileWrap={document.getElementById('profile__wrap')} />,
    document.getElementById('search-bar__wrap')
);

const PRODUCTS = [
    {image: '', price: '99.95', name: 'Jacket DC T-Shirt'},
    {image: '', price: '79.99', name: 'Jacket QT T-Shirt'},
    {image: '', price: '49.50', name: 'Jacket WT T-Shirt'}
];

ReactDOM.render (
    <Cart products={PRODUCTS} container={document.getElementById('header__cart__link--desktop')}/>,
    document.getElementById('header__cart__link--desktop')
);

const props = {};

ReactDOM.render(<LogIn {...props} />, document.getElementById('header__personal-page'));