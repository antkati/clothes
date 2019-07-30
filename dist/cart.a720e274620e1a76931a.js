!function(e){function t(t){for(var n,o,i=t[0],s=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],a[o]&&d.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={4:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;l.push([122,1,3,9,0]),r()}({122:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(6),o=r.n(l),i=r(16),s=(r(92),r(60)),c=r.n(s),u=r(61),m=r.n(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(){return{fontFamily:"Lato, Arial, sans-serif",color:"#606060",fontSize:"0.75rem"}},k=function(){return{height:"42px",width:"100%",border:"1px solid #c2c2c2"}},x=function(){return{width:"100%",border:"1px solid #c2c2c2",marginTop:"7px"}},N=function(e){function t(e){return p(this,t),b(this,v(t).call(this,e))}return h(t,a.a.Component),_(t,[{key:"render",value:function(){var e=this.props,t=e.deliveryMethod,r=e.citiesDelivery,n=e.state,l=e.setInputValue,o=e.setCityValue,s=e.checkPhoneNumber,c=e.checkEmail,u=e.emptyInputError,d=e.invalidPhoneError,p=e.invalidEmailError,f=n.inputs,_=n.showError,b=f.firstName,y=f.lastName,v=f.address,h=f.postalCode,g=f.phoneNumber,N=f.email,w=f.city;return a.a.createElement("section",{className:"delivery grid"},a.a.createElement("div",{className:"delivery__header"},a.a.createElement("h2",{className:"text-transform--uppercase"},"Shipping Address"),a.a.createElement("p",{className:"main__p font--georgia-i"},"All fields are required")),a.a.createElement("div",{className:"delivery__form"},a.a.createElement("div",{className:"delivery__block block--delivery__type"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"delivery-type"},"Select delivery method"),a.a.createElement(i.a,{isMulti:t.isMulti,isClearable:!1,options:t.options,container:E,control:k,menu:x})),a.a.createElement("div",{className:"delivery__block block--first-name"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"first-name"},"First name"),a.a.createElement("input",{onChange:l,"data-statekey":"firstName",value:b.value,type:"text",className:"delivery__form__input",id:"first-name"}),!b.value&&_&&u),a.a.createElement("div",{className:"delivery__block block--last-name"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"last-name"},"Last name"),a.a.createElement("input",{onChange:l,"data-statekey":"lastName",value:y.value,type:"text",className:"delivery__form__input",id:"last-name"}),!y.value&&_&&u),a.a.createElement("div",{className:"delivery__block block--address-1"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"address-1"},"Address ",a.a.createElement("span",{className:"text-transform--lowercase"},"(line 1)")),a.a.createElement("input",{onChange:l,"data-statekey":"address",value:v.value,type:"text",className:"delivery__form__input",id:"address-1"}),!v.value&&_&&u),a.a.createElement("div",{className:"delivery__block block--address-2"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"address-2"},"Address ",a.a.createElement("span",{className:"text-transform--lowercase"},"(line 2)")),a.a.createElement("input",{type:"text",className:"delivery__form__input",id:"address-2"})),a.a.createElement("div",{className:"delivery__block block--city"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"city"},"City"),a.a.createElement(i.a,{isMulti:r.isMulti,isSearchable:!0,isClearable:!1,options:r.options,container:E,control:k,menu:x,onChange:o,value:w.value}),!w.value&&_&&u),a.a.createElement("div",{className:"delivery__block block--postal-code"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"postal-code"},"Postal code"),a.a.createElement("input",{onChange:l,"data-statekey":"postalCode",value:h.value,type:"text",className:"delivery__form__input",id:"postal-code"}),!h.value&&_&&u),a.a.createElement("div",{className:"delivery__block block--phone"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"phone-number"},"Phone number"),a.a.createElement(m.a,{mask:"+7 (999) 999-99-99",maskChar:null,"data-statekey":"phoneNumber",onChange:l,onBlur:s,value:g.value,className:"delivery__form__input",id:"phone-number"}),!g.value&&_&&u,!g.isValid&&d),a.a.createElement("div",{className:"delivery__block block--mail"},a.a.createElement("label",{className:"text-transform--uppercase delivery__form__label",htmlFor:"e-mail"},"E-mail"),a.a.createElement("input",{onChange:l,onBlur:c,"data-statekey":"email",value:N.value,type:"text",className:"delivery__form__input",id:"e-mail"}),!N.value&&_&&u,!N.isValid&&p),a.a.createElement("div",{className:"delivery__block block--use-adress"},a.a.createElement("input",{type:"checkbox",id:"use-adress"}),a.a.createElement("label",{className:"delivery__form__label--checkbox",htmlFor:"use-adress"},"Use this address for Billing"))))}}]),t}(),w=function(e){function t(e){return p(this,t),b(this,v(t).call(this,e))}return h(t,a.a.Component),_(t,[{key:"render",value:function(){var e=this.props.paymentMethod;return a.a.createElement("section",{className:"payment grid"},a.a.createElement("div",{className:"payment__header"},a.a.createElement("h2",{className:"text-transform--uppercase"},"Payment Options"),a.a.createElement("p",{className:"main__p font--georgia-i"},"All fields are required")),a.a.createElement("div",{className:"payment__form"},a.a.createElement("table",{className:"payment__table"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",{className:"font--georgia payment__table__name"},"Subtotal:"),a.a.createElement("td",{className:"font--georgia-i payment__table__value"},"€567,95")),a.a.createElement("tr",null,a.a.createElement("td",{className:"font--georgia payment__table__name"},"Shipping:"),a.a.createElement("td",{className:"font--georgia-i payment__table__value"},"€15,00")),a.a.createElement("tr",null,a.a.createElement("td",{className:"font--georgia payment__table__name payment__table__name--orange"},"Total:"),a.a.createElement("td",{className:"font--georgia-i payment__table__value payment__table__value--orange"},"€582,95")))),a.a.createElement("div",{className:"payment__block block--payment__type"},a.a.createElement("label",{className:"text-transform--uppercase payment__form__label",htmlFor:"payment-type"},"Select payment method"),a.a.createElement(i.a,{isMulti:e.isMulti,isClearable:!1,options:e.options,container:E,control:k,menu:x})),a.a.createElement("input",{type:"submit",value:"Order now",className:"btn btn--orange text-transform--uppercase order-btn"})))}}]),t}(),O=function(e){function t(e){var r;return p(this,t),(r=b(this,v(t).call(this,e))).state={inputs:{firstName:{value:"",isValid:!0},lastName:{value:"",isValid:!0},address:{value:"",isValid:!0},postalCode:{value:"",isValid:!0},phoneNumber:{value:"",isValid:!0},email:{value:"",isValid:!0},city:{value:"",isValid:!0}},showError:!1},r.formRef=a.a.createRef(),r.setInputValue=r.setInputValue.bind(y(r)),r.setCityValue=r.setCityValue.bind(y(r)),r.checkForm=r.checkForm.bind(y(r)),r.scrollToError=r.scrollToError.bind(y(r)),r.checkPhoneNumber=r.checkPhoneNumber.bind(y(r)),r.checkEmail=r.checkEmail.bind(y(r)),r}return h(t,a.a.Component),_(t,[{key:"setInputValue",value:function(e){var t=e.target,r=t.getAttribute("data-statekey");r&&this.setState(function(e){return e.inputs[r].value=t.value,e})}},{key:"setCityValue",value:function(e){this.setState(function(t){return t.inputs.city.value=e,t})}},{key:"checkPhoneNumber",value:function(e){var t=e.target,r=t.getAttribute("data-statekey");if(r){var n=t.value.match(/\d/g);n&&11!=n.length?this.setState(function(e){return e.inputs[r].isValid=!1,e}):this.setState(function(e){return e.inputs[r].isValid=!0,e})}}},{key:"checkEmail",value:function(e){var t=e.target,r=t.getAttribute("data-statekey");if(r){!t.value||/^[^@\s,]+@[^@\s,]+?\.[^@\s,\.]+$/.test(t.value)?this.setState(function(e){return e.inputs[r].isValid=!0,e}):this.setState(function(e){return e.inputs[r].isValid=!1,e})}}},{key:"scrollToError",value:function(){var e=this.formRef.current.getBoundingClientRect();window.scrollTo(e.left+pageXOffset,e.top+pageYOffset)}},{key:"checkForm",value:function(e){for(var t in this.state.inputs){var r=this.state.inputs[t];if(!r.value||!r.isValid)return this.setState({showError:!0}),this.scrollToError(),void e.preventDefault()}this.setState({showError:!1})}},{key:"render",value:function(){var e=this.props,t=e.deliveryMethod,r=e.paymentMethod,n=e.citiesDelivery,l=a.a.createElement("div",{className:"delivery__form__error"},"This field is required."),o=a.a.createElement("div",{className:"delivery__form__error"},"Please enter the correct number of your mobile phone. For example, +7 (999) 999-99-99."),i=a.a.createElement("div",{className:"delivery__form__error"},"Please enter your e-mail correctly."),s=a.a.createElement("img",{className:"order-separator",src:c.a});return a.a.createElement("form",{onSubmit:this.checkForm,className:"order-form",ref:this.formRef},s,a.a.createElement(N,{deliveryMethod:t,citiesDelivery:n,state:this.state,setInputValue:this.setInputValue,setCityValue:this.setCityValue,checkPhoneNumber:this.checkPhoneNumber,checkEmail:this.checkEmail,emptyInputError:l,invalidPhoneError:o,invalidEmailError:i}),s,a.a.createElement(w,{paymentMethod:r}))}}]),t}(),C={deliveryMethod:{name:"Delivery method",type:"select",isMulti:!1,options:[{value:"DHL",label:"DHL - €15,00",selected:!0,disable:!1},{value:"DPD",label:"DPD - €17,00",selected:!1,disable:!1},{value:"GPL CARGO",label:"GPL CARGO - €14,50",selected:!1,disable:!1},{value:"UC-Solutions",label:"UC-Solutions - €20,00",selected:!1,disable:!1}]},paymentMethod:{name:"Payment method",type:"select",isMulti:!1,options:[{value:"Credit card",label:"Credit card",selected:!0,disable:!1},{value:"Cash",label:"Cash",selected:!1,disable:!1}]},citiesDelivery:{name:"City",type:"select",isMulti:!1,options:[{value:"1",label:"Moscow, Russia",selected:!1,disable:!1},{value:"2",label:"Kiev, Ukraine",selected:!1,disable:!1},{value:"3",label:"Minsk, Belarus",selected:!1,disable:!1},{value:"4",label:"Tokyo, Japan",selected:!1,disable:!1},{value:"5",label:"Berlin, Germany",selected:!1,disable:!1},{value:"6",label:"Beijing, China",selected:!1,disable:!1}]}};o.a.render(a.a.createElement(O,C),document.getElementById("order-form-wrap"))},16:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(5),o=r(32),i=(r(33),r(18)),s=r.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){m(e,t,r[t])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){return a.a.createElement(l.z.DropdownIndicator,e,a.a.createElement("i",{className:"arrow-bottom"}))},y=function(e){return a.a.createElement(l.z.ClearIndicator,e,a.a.createElement("img",{className:"deleteFilters",src:s.a}))},v=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).call(this,e))}var r,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,a.a.Component),r=t,(n=[{key:"searchSelectedOptions",value:function(e){return e.filter(function(e){return e.selected})}},{key:"render",value:function(){var e=this.props,t=e.label,r=void 0===t?function(){return{}}:t,n=e.isMulti,l=e.options,i=e.container,s=e.control,c=e.menu,m=e.isSearchable,d=void 0!==m&&m,p=e.onChange,f=void 0===p?null:p,_=e.value,v=void 0===_?void 0:_,h=e.isClearable,g=void 0===h||h,E={container:function(e){return u({},e,i())},control:function(){return u({display:"flex"},s(),r())},indicatorSeparator:function(){return{display:"none"}},menu:function(e){return u({},e,{borderRadius:"none",boxShadow:"none"},c())},option:function(e,t){var r=t.isDisabled,n=t.isFocused,a=t.isSelected;return u({},e,{backgroundColor:r?null:a?"#f4f4f4":n?"#e1e1e1":null,color:r?"#9a9a9a":"#606060",":active":u({},e[":active"],{backgroundColor:!r&&"#f4f4f4"})})},multiValue:function(e){return u({},e,{backgroundColor:"#f4f4f4"})},multiValueRemove:function(e){return u({},e,{":hover":{backgroundColor:"#eaeaea",color:null}})}};return a.a.createElement(o.a,{isSearchable:d,isClearable:g,isMulti:n,options:l,isOptionDisabled:function(e){return e.disable},defaultValue:this.searchSelectedOptions(l),value:v,placeholder:"",styles:E,components:{DropdownIndicator:b,ClearIndicator:y},onChange:f})}}])&&d(r.prototype,n),l&&d(r,l),t}();t.a=v},17:function(e,t,r){e.exports=r.p+"f316cc17964e4b95c7e122e37b8ba9f2.eot"},18:function(e,t,r){e.exports=r.p+"26fa524de541c563ca518dc94a1e2654.png"},25:function(e,t,r){e.exports=r.p+"fd6cb6636437818908a88cd51cdb47f8.woff2"},26:function(e,t,r){e.exports=r.p+"a0cd6592a5b4282244fe47a22bec917a.woff"},27:function(e,t,r){e.exports=r.p+"376bbd246c4005c10d53ee8414c6e9c2.ttf"},28:function(e,t,r){e.exports=r.p+"1fff842d37a7618db9db86cb52847db6.svg"},33:function(e,t,r){var n=r(34);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(14)(n,a);n.locals&&(e.exports=n.locals)},34:function(e,t,r){t=e.exports=r(13)(!1);var n=r(23),a=n(r(17)),l=n(r(17)+"#iefix"),o=n(r(25)),i=n(r(26)),s=n(r(27)),c=n(r(28)+"#fontello");t.push([e.i,"@font-face {\r\n    font-family: 'fontello';\r\n    src: url("+a+");\r\n    src: url("+l+") format('embedded-opentype'),\r\n         url("+o+") format('woff2'),\r\n         url("+i+") format('woff'),\r\n         url("+s+") format('truetype'),\r\n         url("+c+") format('svg');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.arrow-bottom:before {\r\n    content: '\\e801';\r\n    font-family: 'fontello';\r\n    font-style: normal;\r\n    color: black;\r\n}\r\n\r\n.deleteFilters {\r\n    cursor: pointer;\r\n}",""])},60:function(e,t,r){e.exports=r.p+"3e50808de12faec1af1b236f2c465fad.png"},92:function(e,t,r){var n=r(93);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};r(14)(n,a);n.locals&&(e.exports=n.locals)},93:function(e,t,r){(e.exports=r(13)(!1)).push([e.i,".delivery__form__label,\r\n.payment__form__label,\r\n.delivery__form__label--checkbox,\r\n.delivery__form__input,\r\n.payment__form__input  {\r\n    color: #606060;\r\n\tfont-size: 0.75rem;\t\r\n}\r\n\r\n.payment__table {\r\n\tfont-size: 1.125rem;\r\n}\r\n\r\n.payment__table__value--orange,\r\n.payment__table__name--orange {\r\n\tcolor: #f68236;\r\n}\r\n\r\n/* separator */\r\n.order-separator {\r\n\tdisplay: block;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/* DELIVERY */\r\n.delivery, \r\n.payment {\r\n\tborder: 1px solid #e5e5e5;\r\n\tmargin: 4.25rem 0;\r\n}\r\n\r\n.delivery__form,\r\n.payment__form {\r\n\twidth: 50%;\r\n\tmargin: 4rem auto 0 auto;\r\n}\r\n\r\n.delivery__form {\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.delivery__form__label,\r\n.payment__form__label {\r\n\tdisplay: block;\r\n\tmargin-bottom: 7px;\r\n}\r\n\r\n.delivery__form__input,\r\n.payment__form__input {\r\n\theight: 42px;\r\n\twidth: 100%;\t\r\n\tborder: 1px solid #c2c2c2;\r\n\tpadding: 0 10px;\r\n\toutline: 0;\r\n}\r\n\r\n.block--delivery__type,\r\n.block--address-1,\r\n.block--address-2,\r\n.block--use-adress {\r\n\twidth: 100%;\r\n}\r\n\r\n.block--first-name,\r\n.block--last-name,\r\n.block--city,\r\n.block--postal-code,\r\n.block--phone,\r\n.block--mail {\r\n\twidth: 48%;\r\n}\r\n\r\n.delivery__block:not(:last-child) {\r\n\tmargin-bottom: 2rem;\r\n}\r\n\r\n.block--use-adress {\r\n\ttext-align: center;\r\n}\r\n\r\n.delivery__form__error {\r\n\tmargin-top: 7px;\r\n\tcolor: red;\r\n\tfont-size: 0.75rem;\r\n}\r\n\r\n/* PAYMENT */\r\n.payment__block {\r\n\tmargin: 5rem 0 2.5rem 0;\r\n}\r\n\r\n.payment__table {\r\n\twidth: 100%;\r\n}\r\n\r\n.payment__table__name {\r\n\twidth: 50%;\r\n\ttext-align: right;\r\n\tpadding: 10px 10px 10px 0;\r\n}\r\n\r\n.payment__table__value {\r\n\twidth: 50%;\r\n\tpadding: 10px 0 10px 10px;\t\r\n}\r\n\r\n.order-btn {\r\n\tdisplay: block;\r\n\twidth: 195px;\r\n\theight: 50px;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n/* to 768px */\r\n@media screen and (max-width: 768px) {\r\n    /* PAGE: ORDER*/\r\n\t.delivery__form,\r\n\t.payment__form {\r\n\t\twidth: 90%;\r\n\t}\t\r\n\r\n\t.block--first-name,\r\n\t.block--last-name,\r\n\t.block--city,\r\n\t.block--postal-code,\r\n\t.block--phone,\r\n\t.block--mail {\r\n\t\twidth: 100%;\r\n\t}\t\r\n}\r\n\r\n\r\n/* from 769px to 992px */\t\r\n@media screen and (min-width: 769px) and (max-width: 992px) {\r\n    /* PAGE: ORDER */\r\n\t.delivery__form,\r\n\t.payment__form {\r\n\t\twidth: 70%;\r\n\t}\r\n}\r\n\r\n/* GRID AND FLEX */\r\n@supports(grid-area: auto) {\r\n\t.grid {\r\n\t\tmargin-right: 10px;\r\n\t\tmargin-left: 10px;\t\t\r\n\t}\r\n\r\n    /* PAGE: ORDER*/\r\n\t.delivery__header,\r\n\t.delivery__form,\r\n\t.payment__header,\r\n\t.payment__form {\r\n\t\tgrid-column: 1 / 5;\t\r\n\t}\r\n\r\n\t@media screen and (max-width: 768px) {\r\n\t\t.grid {\r\n\t\t\tmargin-right: 20px;\r\n\t\t\tmargin-left: 20px;\t\t\t\r\n\t\t}\r\n\t}\r\n}",""])}});
//# sourceMappingURL=cart.a720e274620e1a76931a.js.map