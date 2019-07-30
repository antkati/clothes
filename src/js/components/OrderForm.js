import React from "react";
import SelectStyled from "./SelectStyled.js";
import "../styles/OrderForm.css";
import separatorImg from "../images/order-separator.png";
import InputMask from 'react-input-mask';


const containerSelect = () => ({
    fontFamily: 'Lato, Arial, sans-serif',  
    color: '#606060',
    fontSize: '0.75rem'       
})

const controlSelect = () => ({
    height: '42px',
    width: '100%',
    border: '1px solid #c2c2c2'
})

const menuSelect = () => ({
    width: '100%',
    border: '1px solid #c2c2c2',
    marginTop: '7px'
})


class Delivery extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            deliveryMethod, 
            citiesDelivery, 
            state, 
            setInputValue, 
            setCityValue, 
            checkPhoneNumber,
            checkEmail,
            emptyInputError, 
            invalidPhoneError, 
            invalidEmailError 
        } = this.props;
        const { inputs, showError } = state;
        const { firstName, lastName, address, postalCode, phoneNumber, email, city } = inputs;

        return (
            <section className="delivery grid">
                <div className="delivery__header">
                    <h2 className="text-transform--uppercase">Shipping Address</h2>
                    <p className="main__p font--georgia-i">All fields are required</p>	
                </div>

                <div className="delivery__form">
                    <div className="delivery__block block--delivery__type">
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="delivery-type">Select delivery method</label>
                        <SelectStyled isMulti={deliveryMethod.isMulti}
                            isClearable={false} 
                            options={deliveryMethod.options} 
                            container={containerSelect}
                            control={controlSelect}
                            menu={menuSelect} />
                    </div>

                    <div className="delivery__block block--first-name">
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="first-name">First name</label>
                        <input onChange={setInputValue} data-statekey="firstName" value={firstName.value} type="text" className="delivery__form__input" id="first-name" />
                        {!firstName.value && showError && emptyInputError}
                    </div>				

                    <div className="delivery__block block--last-name">
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="last-name">Last name</label>
                        <input onChange={setInputValue} data-statekey="lastName" value={lastName.value} type="text" className="delivery__form__input" id="last-name" />
                        {!lastName.value && showError && emptyInputError}
                    </div>

                    <div className="delivery__block block--address-1">
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="address-1">Address <span className="text-transform--lowercase">(line 1)</span></label>
                        <input onChange={setInputValue} data-statekey="address" value={address.value} type="text" className="delivery__form__input" id="address-1" />
                        {!address.value && showError && emptyInputError}
                    </div>

                    <div className="delivery__block block--address-2">						
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="address-2">Address <span className="text-transform--lowercase">(line 2)</span></label>
                        <input type="text" className="delivery__form__input" id="address-2" />
                    </div>											

                    <div className="delivery__block block--city">
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="city">City</label>
                        <SelectStyled isMulti={citiesDelivery.isMulti} 
                            isSearchable={true}
                            isClearable={false}
                            options={citiesDelivery.options} 
                            container={containerSelect}
                            control={controlSelect}
                            menu={menuSelect} 
                            onChange={setCityValue}
                            value={city.value} />	

                        {!city.value && showError && emptyInputError}
                    </div>	

                    <div className="delivery__block block--postal-code">					
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="postal-code">Postal code</label>
                        <input onChange={setInputValue} data-statekey="postalCode" value={postalCode.value} type="text" className="delivery__form__input" id="postal-code" />
                        {!postalCode.value && showError && emptyInputError}				
                    </div>

                    <div className="delivery__block block--phone">				
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="phone-number">Phone number</label>
                        <InputMask mask="+7 (999) 999-99-99" 
                            maskChar={null}
                            data-statekey="phoneNumber"
                            onChange={setInputValue}
                            onBlur={checkPhoneNumber}
                            value={phoneNumber.value}
                            className="delivery__form__input" 
                            id="phone-number" />                         
                        {!phoneNumber.value && showError && emptyInputError} 	
                        {!phoneNumber.isValid && invalidPhoneError}
                    </div>

                    <div className="delivery__block block--mail">
                        <label className="text-transform--uppercase delivery__form__label" htmlFor="e-mail">E-mail</label>
                        <input onChange={setInputValue} onBlur={checkEmail} data-statekey="email" value={email.value} type="text" className="delivery__form__input" id="e-mail" />
                        {!email.value && showError && emptyInputError}
                        {!email.isValid && invalidEmailError}
                    </div>	

                    <div className="delivery__block block--use-adress">
                        <input type="checkbox" id="use-adress" />
                        <label className="delivery__form__label--checkbox" htmlFor="use-adress">Use this address for Billing</label>
                    </div>
                </div>
            </section>
        )
    }
}



class Payment extends React.Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const { paymentMethod } = this.props;

        return (
            <section className="payment grid">
                <div className="payment__header">
                    <h2 className="text-transform--uppercase">Payment Options</h2>
                    <p className="main__p font--georgia-i">All fields are required</p>	
                </div>	

                <div className="payment__form">
                    <table className="payment__table">
                        <tbody>
                            <tr>
                                <td className="font--georgia payment__table__name">Subtotal:</td>
                                <td className="font--georgia-i payment__table__value">€567,95</td>
                            </tr>
                            <tr>
                                <td className="font--georgia payment__table__name">Shipping:</td>
                                <td className="font--georgia-i payment__table__value">€15,00</td>									
                            </tr>
                            <tr>
                                <td className="font--georgia payment__table__name payment__table__name--orange">Total:</td>
                                <td className="font--georgia-i payment__table__value payment__table__value--orange">€582,95</td>									
                            </tr>
                        </tbody>
                    </table>

                    <div className="payment__block block--payment__type">
                        <label className="text-transform--uppercase payment__form__label" htmlFor="payment-type">Select payment method</label>
                        <SelectStyled isMulti={paymentMethod.isMulti} 
                            isClearable={false} 
                            options={paymentMethod.options} 
                            container={containerSelect}
                            control={controlSelect}
                            menu={menuSelect} />
                    </div>	

                    <input type="submit" value="Order now" className="btn btn--orange text-transform--uppercase order-btn" />
                </div>				
            </section>              
        )
    }
}



class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: {
                    value: "",
                    isValid: true
                },
                lastName: {
                    value: "",
                    isValid: true                    
                },
                address: {
                    value: "",
                    isValid: true                     
                },
                postalCode: {
                    value: "",
                    isValid: true                     
                },
                phoneNumber: {
                    value: "",
                    isValid: true                    
                },
                email: {
                    value: "",
                    isValid: true                     
                },
                city: {
                    value: "",
                    isValid: true                    
                }  
            },
            showError: false
        }

        this.formRef = React.createRef();

        this.setInputValue = this.setInputValue.bind(this);
        this.setCityValue = this.setCityValue.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.scrollToError = this.scrollToError.bind(this);
        this.checkPhoneNumber = this.checkPhoneNumber.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
    }


    setInputValue(e) {
        const target = e.target;
        const stateKey = target.getAttribute("data-statekey");
        if(!stateKey) return;

        this.setState((previousState) => {
            let input = previousState.inputs[stateKey];
            input.value = target.value;
            return previousState;
        })
    }


    setCityValue(city) {      
        this.setState((previousState) => {
            previousState.inputs.city.value = city;
            return previousState;
        })
    }


    checkPhoneNumber(e) {
        const phoneInput = e.target;
        const stateKey = phoneInput.getAttribute("data-statekey");
        if(!stateKey) return;

        let numbersArr = phoneInput.value.match(/\d/g);

        if(numbersArr && numbersArr.length != 11) {
            this.setState((previousState) => {
                let phoneState = previousState.inputs[stateKey];
                phoneState.isValid = false;
                return previousState;
            })
            return;            
        }

        this.setState((previousState) => {
            let phoneState = previousState.inputs[stateKey];
            phoneState.isValid = true;
            return previousState;
        }) 
    }


    checkEmail(e) {
        const emailInput = e.target;
        const stateKey = emailInput.getAttribute("data-statekey");
        if(!stateKey) return;

        const emailReg = /^[^@\s,]+@[^@\s,]+?\.[^@\s,\.]+$/;
        if(emailInput.value && !emailReg.test(emailInput.value)) {
            this.setState((previousState) => {
                let emailState = previousState.inputs[stateKey];
                emailState.isValid = false;
                return previousState;
            })
            return;    
        }

        this.setState((previousState) => {
            let emailState = previousState.inputs[stateKey];
            emailState.isValid = true;
            return previousState;
        })
    }


    scrollToError() {
        const coordsForm = this.formRef.current.getBoundingClientRect();
        window.scrollTo(coordsForm.left + pageXOffset, coordsForm.top + pageYOffset);
    }


    checkForm(e) {
        for (let key in this.state.inputs) {
            let input = this.state.inputs[key];
            if(!input.value || !input.isValid) {
                this.setState({
                    showError: true
                });

                this.scrollToError();
                e.preventDefault();
                return;
            }
        }

        this.setState({
            showError: false
        })        
    }

    render() {
        const { deliveryMethod, paymentMethod, citiesDelivery } = this.props;
        const emptyInputError = <div className="delivery__form__error">This field is required.</div>;
        const invalidPhoneError = (
            <div className="delivery__form__error">
                Please enter the correct number of your mobile phone. For example, +7 (999) 999-99-99.
            </div>
        );
        const invalidEmailError = <div className="delivery__form__error">Please enter your e-mail correctly.</div>;
        const separator = <img className="order-separator" src={separatorImg} />

        return (
            <form onSubmit={this.checkForm} className="order-form" ref={this.formRef}>
                {separator}	

                <Delivery deliveryMethod={deliveryMethod}
                    citiesDelivery={citiesDelivery}
                    state={this.state}
                    setInputValue={this.setInputValue}
                    setCityValue={this.setCityValue}
                    checkPhoneNumber={this.checkPhoneNumber}
                    checkEmail={this.checkEmail}
                    emptyInputError={emptyInputError}
                    invalidPhoneError={invalidPhoneError}
                    invalidEmailError={invalidEmailError} />

                {separator}

                <Payment paymentMethod={paymentMethod} />
            </form>	            
        )
    }
}

export default OrderForm;
