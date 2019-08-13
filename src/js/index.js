import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';
import Cart from './components/CartPopUp.js';
import LogIn from './components/LogIn.js';
import BurgerMenu from './components/BurgerMenu.js';
import "./styles/window.css";


ReactDOM.render(
    <SearchBar profileWrap={document.getElementById('profile__wrap')} />,
    document.getElementById('search-bar__wrap')
);


const PRODUCTS = [
    { image: './images/product/product-item-3-1-50w.png', price: '99.95', name: 'Jacket DC T-Shirt', href: './product.html' },
    { image: './images/product/product-item-1-1-50w.png', price: '79.99', name: 'Jacket QT T-Shirt', href: './product.html' },
    { image: './images/product/product-item-2-1-50w.png', price: '49.50', name: 'Jacket WT T-Shirt', href: './product.html' }
];

ReactDOM.render(
    <Cart products={PRODUCTS} container={document.getElementById('header__cart__link--desktop')} />,
    document.getElementById('header__cart__link--desktop')
);


const propsLogIn = {};

ReactDOM.render(<LogIn {...propsLogIn} />, document.getElementById('header__personal-page'));


const CATS =
    [
        {
            name: 'Woman',
            id: '1',
            href: './category_all.html',
            subsections:
                [
                    {
                        name: 'Clothes',
                        id: '11',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'Blouses & shirts',
                                    id: '111',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'T-shirts & longslives',
                                    id: '112',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Hoody',
                                    id: '113',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Pants & shorts',
                                    id: '114',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Jeans',
                                    id: '115',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Outerwear',
                                    id: '116',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Dresses',
                                    id: '117',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Skirts',
                                    id: '118',
                                    href: './category.html',
                                    subsections: []
                                }
                            ]
                    },
                    {
                        name: 'Shoes',
                        id: '12',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'Shoes',
                                    id: '121',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Sandals',
                                    id: '122',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Sneakers',
                                    id: '123',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Moccasins',
                                    id: '124',
                                    href: './category.html',
                                    subsections: []
                                }                                
                            ]
                    },
                    {
                        name: 'Accessories',
                        id: '13',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'Scarves',
                                    id: '131',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Gloves',
                                    id: '132',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Bags',
                                    id: '133',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Belts',
                                    id: '134',
                                    href: './category.html',
                                    subsections: []
                                }
                            ]
                    }
                ]
        },
        {
            name: 'Men',
            id: '2',
            href: './category_all.html',
            subsections:
                [
                    {
                        name: 'Clothes',
                        id: '21',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'Shirts',
                                    id: '211',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'T-shirts & longslives',
                                    id: '212',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Hoody',
                                    id: '213',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Pants & shorts',
                                    id: '214',
                                    href: './category.html',
                                    subsections: []
                                }
                            ]
                    },
                    {
                        name: 'Shoes',
                        id: '22',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'Shoes',
                                    id: '221',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Sandals',
                                    id: '222',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Sneakers',
                                    id: '223',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Boots',
                                    id: '224',
                                    href: './category.html',
                                    subsections: []
                                }
                            ]
                    }
                ]
        },
        {
            name: 'Kids',
            id: '3',
            href: './category_all.html',
            subsections:
                [
                    {
                        name: 'Clothes',
                        id: '31',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'For girls',
                                    id: '311',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'For boys',
                                    id: '312',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'For newborn',
                                    id: '313',
                                    href: './category.html',
                                    subsections: []
                                }
                            ]
                    },
                    {
                        name: 'Other',
                        id: '32',
                        href: './category_all.html',
                        subsections:
                            [
                                {
                                    name: 'Products for baby',
                                    id: '321',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Feeding accessories',
                                    id: '322',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Bathing accessories',
                                    id: '323',
                                    href: './category.html',
                                    subsections: []
                                },
                                {
                                    name: 'Child safety',
                                    id: '324',
                                    href: './category.html',
                                    subsections: []
                                }
                            ]
                    }
                ]
        },
        {
            name: 'Comming Soon',
            id: '4',
            href: '#'
        },
        {
            name: 'About',
            id: '5',
            href: '#'
        }                
    ]

ReactDOM.render(<BurgerMenu cats={CATS} />, document.getElementById('burger-menu__wrap'));


window.addEventListener('scroll', changeStickyHeaderHeight);
document.addEventListener('DOMContentLoaded', changeStickyHeaderHeight);

function changeStickyHeaderHeight() {
    let header = document.getElementById('header__section--1');
    let scrolled = pageYOffset;
    
    if(!header.classList.contains('header__section--scrolled') && scrolled >= 35) {
        header.classList.add('header__section--scrolled'); 
        return;
    }

    if(header.classList.contains('header__section--scrolled') && scrolled < 35) {
        header.classList.remove('header__section--scrolled'); 
        return;
    }
}




