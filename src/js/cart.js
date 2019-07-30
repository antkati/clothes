import React from 'react';
import ReactDOM from 'react-dom';
import OrderForm from './components/OrderForm.js';

const DeliveryMethod = {
    name: 'Delivery method',
    type: 'select',
    isMulti: false,
    options: [
        {
            value: 'DHL',
            label: 'DHL - €15,00',
            selected: true,
            disable: false
        },
        {
            value: 'DPD',
            label: 'DPD - €17,00',
            selected: false,
            disable: false
        },
        {
            value: 'GPL CARGO',
            label: 'GPL CARGO - €14,50',
            selected: false,
            disable: false
        },
        {
            value: 'UC-Solutions',
            label: 'UC-Solutions - €20,00',
            selected: false,
            disable: false
        }
    ]
}

const PaymentMethod = {
    name: 'Payment method',
    type: 'select',
    isMulti: false,
    options: [
        {
            value: 'Credit card',
            label: 'Credit card',
            selected: true,
            disable: false
        },
        {
            value: 'Cash',
            label: 'Cash',
            selected: false,
            disable: false
        }
    ]
}

const CitiesDelivery = {
    name: 'City',
    type: 'select',
    isMulti: false,
    options: [
        {
            value: '1',
            label: 'Moscow, Russia',
            selected: false,
            disable: false
        },
        {
            value: '2',
            label: 'Kiev, Ukraine',
            selected: false,
            disable: false
        },
        {
            value: '3',
            label: 'Minsk, Belarus',
            selected: false,
            disable: false
        },
        {
            value: '4',
            label: 'Tokyo, Japan',
            selected: false,
            disable: false
        },
        {
            value: '5',
            label: 'Berlin, Germany',
            selected: false,
            disable: false
        },
        {
            value: '6',
            label: 'Beijing, China',
            selected: false,
            disable: false
        }
    ]   
}

const propsOrder = {
    deliveryMethod: DeliveryMethod,
    paymentMethod: PaymentMethod,
    citiesDelivery: CitiesDelivery
}

ReactDOM.render(<OrderForm {...propsOrder} />, document.getElementById('order-form-wrap'));