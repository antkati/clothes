import React from "react";
import ReactModal from "react-modal";
import iconCancel from "../images/cancel.png";
import burger from "../images/burger-menu.png";
import "../styles/BurgerMenu.css";
import "../images/search.png";
import "../images/search-dark.png";
import "../styles/LogIn.css";

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalMenu: false,
            parentID: null,
            showModalLogIn: false
        };

        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleOpenCat = this.handleOpenCat.bind(this);
        this.handleCloseCat = this.handleCloseCat.bind(this); 
        this.handleOpenLogIn = this.handleOpenLogIn.bind(this);
        this.handleCloseLogIn = this.handleCloseLogIn.bind(this);                   

        this.categories = [];
        this.previousID = null;
    }


    handleOpenMenu() {
        this.createLis(this.props.cats);

        this.setState({
            showModalMenu: true
        });
    }


    handleCloseMenu() {
        this.setState({
            showModalMenu: false,
            parentID: null,
            showModalLogIn: false
        });

        this.previousID = null;
    }

    handleOpenCat(e) {
        let target = e.target;
        while(target.tagName != "LI") {
            target = target.parentNode;            
        }

        const id = target.getAttribute("data-id");
        if(!id) return;

        let cats = this.searchCats(this.props.cats, id);
        this.createLis(cats);

        this.setState({
            parentID: id
        });
    }

    handleCloseCat() {
        let previousCats = this.searchPreviousCats(this.props.cats, this.state.parentID, null); 
        this.createLis(previousCats);

        this.setState({
            parentID: this.previousID
        });        
    }

    createLis(arr) {
        this.categories = [];

        arr.forEach((item) => {
            if ("subsections" in item && item.subsections.length) {
                this.categories.push(
                    <li key={item.id} data-id={item.id} onClick={this.handleOpenCat}>
                        <span>{item.name}</span>
                        <i className="arrow-right"></i>
                    </li>
                );
            } else {
                this.categories.push(
                    <li key={item.id}>
                        <a href={item.href}>{item.name}</a>
                    </li>
                );                
            }
        })
    }

    searchCats(arr, id) {
        for (let i = 0; i < arr.length; i++) {
            if ("subsections" in arr[i] && arr[i].subsections.length) {
                if(arr[i].id !== id) {
                    let result = this.searchCats(arr[i].subsections, id);
                    if(result) {
                        return result;
                    }
                } else {
                    return arr[i].subsections;
                }
            }
        }
        return null;
    }

    searchPreviousCats(arr, id, previousID) {
    	for(let i = 0; i < arr.length; i++) {	
            if("subsections" in arr[i] && arr[i].subsections.length) {
                if(arr[i].id !== id) {
                    let result = this.searchPreviousCats(arr[i].subsections, id, arr[i].id);
                    if(result) {
                        return result;
                    }
                } else {
                    this.previousID = previousID;
                    return arr;
                }
            }		
        }    
    }

    handleOpenLogIn() {
        this.setState({
            showModalLogIn: true
        });        
    }

    handleCloseLogIn() {
        this.setState({
            showModalLogIn: false
        });         
    }

    render() {
        return (
            <div>
                <img className="header__burger__link" src={burger} onClick={this.handleOpenMenu} />

                <ReactModal
                    isOpen={this.state.showModalMenu}
                    contentLabel="Burger menu"
                    onRequestClose={this.handleCloseMenu}
                    className="burger__modal"
                    overlayClassName="burger__overlay"
                    closeTimeoutMS={700}
                >
                    <img className="burger__close"
                        src={iconCancel}
                        onClick={this.handleCloseMenu}
                    />

                    {!this.state.parentID &&
                        <div className="burger__search">
                            <input type="text"
                                placeholder="Search something..."
                                className="burger__search__input" />
                            <input className="burger__search__button"
                                type="button" />
                        </div>
                    }

                    {!!this.state.parentID &&
                        <div className="burger__back text-transform--uppercase"
                            onClick={this.handleCloseCat}>
                            Back
                        </div>
                    }

                    <ul className="burger__cats text-transform--uppercase">
                        {this.categories}
                    </ul>

                    {!this.state.parentID && 
                        <div className="text-transform--uppercase burger__log-in" 
                            onClick={this.handleOpenLogIn}>
                            <span>Log In</span>
                            <i className="arrow-right"></i>
                        </div>
                    }
                    
                </ReactModal>

                <ReactModal isOpen={this.state.showModalLogIn}
                    contentLabel="Log in"
                    onRequestClose={this.handleCloseMenu}
                    className="pop-up__modal"
                    overlayClassName="pop-up__overlay"
                >
                    <img className="pop-up__close" 
                        src={iconCancel}    
                        onClick={this.handleCloseMenu} 
                    />
                    <div className="burger__back text-transform--uppercase back--log-in"
                        onClick={this.handleCloseLogIn}>
                        Back
                    </div>
                    <h4 className="pop-up__title text-transform--uppercase">Entry</h4>
                    <div className="pop-up__section">
                        <label htmlFor="pop-up__login" className="pop-up__label text-transform--uppercase">Login</label>
                        <input autoFocus id="pop-up__login" type="text" className="pop-up__input"/>
                    </div>
                    <div className="pop-up__section">
                        <label htmlFor="pop-up__password" className="pop-up__label text-transform--uppercase">Password</label>
                        <input type="pop-up__password" className="pop-up__input"/>
                    </div>

                    <div className="pop-up__section">
                        <button className="btn btn--orange btn--log-in text-transform--uppercase pop-up__btn">log in</button>
                        <button className="btn btn--sign-in text-transform--uppercase pop-up__btn">sigh in</button>
                    </div>
                    <a href="#" className="pop-up__forgot-password">Forgot your password?</a>
                </ReactModal>
            </div>
        );
    }
}



export default BurgerMenu;