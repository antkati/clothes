(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4AML":function(e,t,a){e.exports=a.p+"26fa524de541c563ca518dc94a1e2654.png"},"5MwY":function(e,t,a){"use strict";var r=a("q1tI"),v=a.n(r),n=a("7IH9"),_=a("Cs6D"),l=(a("ZkoQ"),a("4AML")),o=a.n(l);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(e){s(t,e,a[e])})}return t}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){return v.a.createElement(n.z.DropdownIndicator,e,v.a.createElement("i",{className:"arrow-bottom"}))}function k(e){return v.a.createElement(n.z.ClearIndicator,e,v.a.createElement("img",{className:"deleteFilters",src:o.a}))}var p=function(){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,m(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,v.a.Component),function(e,t,a){t&&c(e.prototype,t),a&&c(e,a)}(t,[{key:"searchSelectedOptions",value:function(e){return e.filter(function(e){return e.selected})}},{key:"render",value:function(){var e=this.props,t=e.label,a=void 0===t?function(){return{}}:t,r=e.isMulti,n=e.options,l=e.container,o=e.control,i=e.menu,s=e.isSearchable,c=void 0!==s&&s,u=e.onChange,m=void 0===u?null:u,d=e.value,p=void 0===d?void 0:d,f=e.isClearable,b=void 0===f||f,y={container:function(e){return h({},e,l())},control:function(){return h({display:"flex"},o(),a())},indicatorSeparator:function(){return{display:"none"}},menu:function(e){return h({},e,{borderRadius:"none",boxShadow:"none"},i())},option:function(e,t){var a=t.isDisabled,r=t.isFocused,n=t.isSelected;return h({},e,{backgroundColor:a?null:n?"#f4f4f4":r?"#e1e1e1":null,color:a?"#9a9a9a":"#606060",":active":h({},e[":active"],{backgroundColor:!a&&"#f4f4f4"})})},multiValue:function(e){return h({},e,{backgroundColor:"#f4f4f4"})},multiValueRemove:function(e){return h({},e,{":hover":{backgroundColor:"#eaeaea",color:null}})}};return v.a.createElement(_.a,{isSearchable:c,isClearable:b,isMulti:r,options:n,isOptionDisabled:function(e){return e.disable},defaultValue:this.searchSelectedOptions(n),value:p,placeholder:"",styles:y,components:{DropdownIndicator:E,ClearIndicator:k},onChange:m})}}]),t}();t.a=p},VfMa:function(e,t,a){},ZkoQ:function(e,t,a){},dLND:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),E=a.n(r),n=a("i8i4"),l=a.n(n),k=a("5MwY"),o=(a("VfMa"),a("yEq5")),s=a.n(o),i=a("82Mt"),N=a.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,a){return t&&m(e.prototype,t),a&&m(e,a),e}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(){return{fontFamily:"Lato, Arial, sans-serif",color:"#606060",fontSize:"0.75rem"}}function C(){return{height:"42px",width:"100%",border:"1px solid #c2c2c2"}}function w(){return{width:"100%",border:"1px solid #c2c2c2",marginTop:"7px"}}var _=function(){function t(e){return u(this,t),p(this,b(t).call(this,e))}return y(t,E.a.Component),d(t,[{key:"render",value:function(){var e=this.props,t=e.deliveryMethod,a=e.citiesDelivery,r=e.state,n=e.setInputValue,l=e.setCityValue,o=e.checkPhoneNumber,i=e.checkEmail,s=e.emptyInputError,c=e.invalidPhoneError,u=e.invalidEmailError,m=r.inputs,d=r.showError,p=m.firstName,f=m.lastName,b=m.address,y=m.postalCode,v=m.phoneNumber,_=m.email,h=m.city;return E.a.createElement("section",{className:"delivery grid"},E.a.createElement("div",{className:"delivery__header"},E.a.createElement("h2",{className:"text-transform--uppercase"},"Shipping Address"),E.a.createElement("p",{className:"main__p font--georgia-i"},"All fields are required")),E.a.createElement("div",{className:"delivery__form"},E.a.createElement("div",{className:"delivery__block block--delivery__type"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"delivery-type"},"Select delivery method"),E.a.createElement(k.a,{isMulti:t.isMulti,isClearable:!1,options:t.options,container:g,control:C,menu:w})),E.a.createElement("div",{className:"delivery__block block--first-name"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"first-name"},"First name"),E.a.createElement("input",{onChange:n,"data-statekey":"firstName",value:p.value,type:"text",className:"delivery__form__input",id:"first-name"}),!p.value&&d&&s),E.a.createElement("div",{className:"delivery__block block--last-name"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"last-name"},"Last name"),E.a.createElement("input",{onChange:n,"data-statekey":"lastName",value:f.value,type:"text",className:"delivery__form__input",id:"last-name"}),!f.value&&d&&s),E.a.createElement("div",{className:"delivery__block block--address-1"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"address-1"},"Address ",E.a.createElement("span",{className:"text-transform--lowercase"},"(line 1)")),E.a.createElement("input",{onChange:n,"data-statekey":"address",value:b.value,type:"text",className:"delivery__form__input",id:"address-1"}),!b.value&&d&&s),E.a.createElement("div",{className:"delivery__block block--address-2"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"address-2"},"Address ",E.a.createElement("span",{className:"text-transform--lowercase"},"(line 2)")),E.a.createElement("input",{type:"text",className:"delivery__form__input",id:"address-2"})),E.a.createElement("div",{className:"delivery__block block--city"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"city"},"City"),E.a.createElement(k.a,{isMulti:a.isMulti,isSearchable:!0,isClearable:!1,options:a.options,container:g,control:C,menu:w,onChange:l,value:h.value}),!h.value&&d&&s),E.a.createElement("div",{className:"delivery__block block--postal-code"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"postal-code"},"Postal code"),E.a.createElement("input",{onChange:n,"data-statekey":"postalCode",value:y.value,type:"text",className:"delivery__form__input",id:"postal-code"}),!y.value&&d&&s),E.a.createElement("div",{className:"delivery__block block--phone"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"phone-number"},"Phone number"),E.a.createElement(N.a,{mask:"+7 (999) 999-99-99",maskChar:null,"data-statekey":"phoneNumber",onChange:n,onBlur:o,value:v.value,className:"delivery__form__input",id:"phone-number"}),!v.value&&d&&s,!v.isValid&&c),E.a.createElement("div",{className:"delivery__block block--mail"},E.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"e-mail"},"E-mail"),E.a.createElement("input",{onChange:n,onBlur:i,"data-statekey":"email",value:_.value,type:"text",className:"delivery__form__input",id:"e-mail"}),!_.value&&d&&s,!_.isValid&&u),E.a.createElement("div",{className:"delivery__block block--use-adress"},E.a.createElement("input",{type:"checkbox",id:"use-adress"}),E.a.createElement("label",{className:"delivery__form__label--checkbox",htmlFor:"use-adress"},"Use this address for Billing"))))}}]),t}(),h=function(){function t(e){return u(this,t),p(this,b(t).call(this,e))}return y(t,E.a.Component),d(t,[{key:"render",value:function(){var e=this.props.paymentMethod;return E.a.createElement("section",{className:"payment grid"},E.a.createElement("div",{className:"payment__header"},E.a.createElement("h2",{className:"text-transform--uppercase"},"Payment Options"),E.a.createElement("p",{className:"main__p font--georgia-i"},"All fields are required")),E.a.createElement("div",{className:"payment__form"},E.a.createElement("table",{className:"payment__table"},E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"font--georgia payment__table__name"},"Subtotal:"),E.a.createElement("td",{className:"font--georgia-i payment__table__value"},"€567,95")),E.a.createElement("tr",null,E.a.createElement("td",{className:"font--georgia payment__table__name"},"Shipping:"),E.a.createElement("td",{className:"font--georgia-i payment__table__value"},"€15,00")),E.a.createElement("tr",null,E.a.createElement("td",{className:"font--georgia payment__table__name payment__table__name--orange"},"Total:"),E.a.createElement("td",{className:"font--georgia-i payment__table__value payment__table__value--orange"},"€582,95")))),E.a.createElement("div",{className:"payment__block block--payment__type"},E.a.createElement("label",{className:"text-transform--uppercase payment__form__label",htmlFor:"payment-type"},"Select payment method"),E.a.createElement(k.a,{isMulti:e.isMulti,isClearable:!1,options:e.options,container:g,control:C,menu:w})),E.a.createElement("input",{type:"submit",value:"Order now",className:"btn btn--orange text-transform--uppercase order-btn"})))}}]),t}(),S=function(){function a(e){var t;return u(this,a),(t=p(this,b(a).call(this,e))).state={inputs:{firstName:{value:"",isValid:!0},lastName:{value:"",isValid:!0},address:{value:"",isValid:!0},postalCode:{value:"",isValid:!0},phoneNumber:{value:"",isValid:!0},email:{value:"",isValid:!0},city:{value:"",isValid:!0}},showError:!1},t.formRef=E.a.createRef(),t.setInputValue=t.setInputValue.bind(f(t)),t.setCityValue=t.setCityValue.bind(f(t)),t.checkForm=t.checkForm.bind(f(t)),t.scrollToError=t.scrollToError.bind(f(t)),t.checkPhoneNumber=t.checkPhoneNumber.bind(f(t)),t.checkEmail=t.checkEmail.bind(f(t)),t}return y(a,E.a.Component),d(a,[{key:"setInputValue",value:function(e){var t=e.target,a=t.getAttribute("data-statekey");a&&this.setState(function(e){return e.inputs[a].value=t.value,e})}},{key:"setCityValue",value:function(t){this.setState(function(e){return e.inputs.city.value=t,e})}},{key:"checkPhoneNumber",value:function(e){var t=e.target,a=t.getAttribute("data-statekey");if(a){var r=t.value.match(/\d/g);r&&11!=r.length?this.setState(function(e){return e.inputs[a].isValid=!1,e}):this.setState(function(e){return e.inputs[a].isValid=!0,e})}}},{key:"checkEmail",value:function(e){var t=e.target,a=t.getAttribute("data-statekey");if(a){!t.value||/^[^@\s,]+@[^@\s,]+?\.[^@\s,\.]+$/.test(t.value)?this.setState(function(e){return e.inputs[a].isValid=!0,e}):this.setState(function(e){return e.inputs[a].isValid=!1,e})}}},{key:"scrollToError",value:function(){var e=this.formRef.current.getBoundingClientRect();window.scrollTo(e.left+pageXOffset,e.top+pageYOffset)}},{key:"checkForm",value:function(e){for(var t in this.state.inputs){var a=this.state.inputs[t];if(!a.value||!a.isValid)return this.setState({showError:!0}),this.scrollToError(),void e.preventDefault()}this.setState({showError:!1})}},{key:"render",value:function(){var e=this.props,t=e.deliveryMethod,a=e.paymentMethod,r=e.citiesDelivery,n=E.a.createElement("div",{className:"delivery__form__error"},"This field is required."),l=E.a.createElement("div",{className:"delivery__form__error"},"Please enter the correct number of your mobile phone. For example, +7 (999) 999-99-99."),o=E.a.createElement("div",{className:"delivery__form__error"},"Please enter your e-mail correctly."),i=E.a.createElement("img",{className:"order-separator",src:s.a});return E.a.createElement("form",{onSubmit:this.checkForm,className:"order-form",ref:this.formRef},i,E.a.createElement(_,{deliveryMethod:t,citiesDelivery:r,state:this.state,setInputValue:this.setInputValue,setCityValue:this.setCityValue,checkPhoneNumber:this.checkPhoneNumber,checkEmail:this.checkEmail,emptyInputError:n,invalidPhoneError:l,invalidEmailError:o}),i,E.a.createElement(h,{paymentMethod:a}))}}]),a}(),O={deliveryMethod:{name:"Delivery method",type:"select",isMulti:!1,options:[{value:"DHL",label:"DHL - €15,00",selected:!0,disable:!1},{value:"DPD",label:"DPD - €17,00",selected:!1,disable:!1},{value:"GPL CARGO",label:"GPL CARGO - €14,50",selected:!1,disable:!1},{value:"UC-Solutions",label:"UC-Solutions - €20,00",selected:!1,disable:!1}]},paymentMethod:{name:"Payment method",type:"select",isMulti:!1,options:[{value:"Credit card",label:"Credit card",selected:!0,disable:!1},{value:"Cash",label:"Cash",selected:!1,disable:!1}]},citiesDelivery:{name:"City",type:"select",isMulti:!1,options:[{value:"1",label:"Moscow, Russia",selected:!1,disable:!1},{value:"2",label:"Kiev, Ukraine",selected:!1,disable:!1},{value:"3",label:"Minsk, Belarus",selected:!1,disable:!1},{value:"4",label:"Tokyo, Japan",selected:!1,disable:!1},{value:"5",label:"Berlin, Germany",selected:!1,disable:!1},{value:"6",label:"Beijing, China",selected:!1,disable:!1}]}};l.a.render(E.a.createElement(S,O),document.getElementById("order-form-wrap"))},yEq5:function(e,t,a){e.exports=a.p+"3e50808de12faec1af1b236f2c465fad.png"}},[["dLND",8,1,3,14,0]]]);