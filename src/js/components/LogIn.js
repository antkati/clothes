import React from "react";
import ReactModal from "react-modal";
import iconCancel from "../images/cancel.png";
import "../images/user.png";
import "../styles/LogIn.css";

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>
                <a class="header__personal-page__link"  href="#" onClick={this.handleOpenModal}>Log In</a>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="LogIn Modal"
                    onRequestClose={this.handleCloseModal}
                    className="pop-up__modal"
                    overlayClassName="pop-up__overlay"
                >
                    <img className="pop-up__close" 
                        src={iconCancel}
                        onClick={this.handleCloseModal} 
                    />
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

export default LogIn;