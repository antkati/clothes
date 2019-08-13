import React from "react";
import "../styles/Cart.css";
import "../images/product-item-3-1.jpg";
import "../images/desktop-cart.png";
import deleteBasket from "../images/delete-basket.png";

/* Компонент товаров */
class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (        
            <tr className="cart__pop-up__list__body__row">
                <td className="cart__pop-up__item__body cart__pop-up__item__img">
                    <a className="cart__pop-up__img__link" 
                        href={this.props.product.href}>
                        <img src={this.props.product.image} className="cart__pop-up__img" />
                    </a>
                </td>
                <td className="cart__pop-up__item__body cart__pop-up__item__description">
                    <a href={this.props.product.href}>
                        <h4 className="cart__pop-up__h4 text-transform--uppercase">
                            {this.props.product.name}
                        </h4>
                    </a>
                </td>	
                <td className="cart__pop-up__item__body cart__pop-up__item__amount">
                    {"€" + this.props.product.price}
                </td>
                <td className="cart__pop-up__item__body cart__pop-up__item__delete">
                    <img className="delete__img" 
                        src={deleteBasket} 
                        data-index={this.props.index}
                        onClick={this.props.deleteProduct}/>
                </td>								
            </tr>
        )   
    }
}

/* Компонент итого */
class Total extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let total = this.props.products.reduce((sum, current) => {
            let price = +current.price;
            return sum + price;
        }, 0);

        return (
            <tr className="cart__pop-up__list__footer-row grid--shopping-bag">
                <td colSpan="2" className="cart__pop-up__item__footer font--lato-bold">
                    Subtotal:
                    <span className="cart__pop-up__total">
                        {" €" + total}
                    </span>
                </td>
                <td colSpan="2" className="cart__pop-up__item__footer">
                    <button className="btn--orange text-transform--uppercase cart__pop-up__btn">checkout</button>
                </td>
            </tr>
        )

    }
}

/* Компонент всплывашки */
class CartPopUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = this.props.products.map((product, index) => {
            return <ProductRow key={product.name} 
                        product={product} 
                        index={index} 
                        deleteProduct={this.props.deleteProduct}/>
        });

        return (
            <div className="cart__pop-up">
                <table className="cart__pop-up__list">
                    <tbody className="cart__pop-up__list__body">
                        {rows}
                        <Total products={this.props.products}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

/* Компонент всплывашки + ссылка */
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsQuantity: this.props.products.length,
            cartPopUpVisible: false
        }
        this.cart = null;
        this.products = this.props.products.slice();

        this.showCartPopUp = this.showCartPopUp.bind(this);
        this.hideCartPopUp = this.hideCartPopUp.bind(this);
        this.isChildNodeTransition = this.isChildNodeTransition.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    showCartPopUp() {
        if(this.cart) return;

        const container = this.props.container;
        this.cart = container.querySelector(".cart-wrap")

        this.setState({
            cartPopUpVisible: true
        });
    }

    hideCartPopUp(e) {
        if(this.isChildNodeTransition(e)) return;

        this.setState({
            cartPopUpVisible: false
        });

        this.cart = null;
    }

    isChildNodeTransition(e) {
        let relatedTarget = e.relatedTarget;
        if (relatedTarget) {
            while (relatedTarget) {
                if (relatedTarget == this.cart) return true;
                relatedTarget = relatedTarget.parentNode;
            }
        }
        return false;
    }    

    deleteProduct(e) {
        let deleteIndex = e.target.dataset.index;
        this.products.splice(deleteIndex, 1);

        this.setState((state) => ({
            productsQuantity: state.productsQuantity - 1
        }));
    }

    render() {
        return (
            <div className={this.state.cartPopUpVisible && 
                !!this.state.productsQuantity ? "cart-wrap open" : "cart-wrap"}
                onMouseOut={this.hideCartPopUp}>
                <div className="header__cart__button">
                    <a className="header__cart__link"
                        href="./shopping_cart__cut.html"
                        onMouseOver={this.showCartPopUp}>
                            Basket ({this.state.productsQuantity})
                    </a>
                </div>

                {this.state.cartPopUpVisible &&
                    !!this.state.productsQuantity &&
                    <CartPopUp products={this.products} 
                        deleteProduct={this.deleteProduct}/>}
            </div>
        )
    }
}



export default Cart;