import React from 'react';
import "../styles/SearchBar.css";
import "../images/search.png";
import "../images/search-dark.png";
 
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTextVisible: "",
            inputTextValue: ""
        }
        this.searchBar = null;
        this.timerID = null;

        this.showInputText = this.showInputText.bind(this);
        this.inputIsEmpty = this.inputIsEmpty.bind(this);
        this.isChildNodeTransition = this.isChildNodeTransition.bind(this);
        this.hideInputText = this.hideInputText.bind(this);
        this.hide = this.hide.bind(this);
        this.changeInputTextValue = this.changeInputTextValue.bind(this);
        this.setDisplayNone = this.setDisplayNone.bind(this);
    }

    showInputText(e) {
        if (this.searchBar) {
            clearTimeout(this.timerID);
            return;
        };
        this.searchBar = document.querySelector(".header__search-bar");

        this.props.profileWrap.setAttribute('data-move', 'left');

        const inputText = document.querySelector('.search-bar__input-text');
        inputText.style.display = "block";

        this.setState({
            inputTextVisible: "open"
        });
    }

    inputIsEmpty() {
        if (this.state.inputTextValue === "") return true;
        return false;        
    }

    isChildNodeTransition(e) {
        let relatedTarget = e.relatedTarget;
        if (relatedTarget) {
            while (relatedTarget) {
                if (relatedTarget == this.searchBar) return true;
                relatedTarget = relatedTarget.parentNode;
            }
        }
        return false;
    }    

    hideInputText(e) {
        if(!this.inputIsEmpty()) return;

        if(this.isChildNodeTransition(e)) return;

        this.timerID = setTimeout(this.hide, 1000); 
    }

    hide() {
        this.setState({
            inputTextVisible: "close"
        });

        this.props.profileWrap.setAttribute('data-move', 'right');       
        this.searchBar = null;
    }

    changeInputTextValue(e) {
        if (this.timerID) {
            clearTimeout(this.timerID);
        }

        this.setState({
            inputTextValue: e.target.value
        });

        if(!e.target.value) {
            this.timerID = setTimeout(this.hide, 1000);
        }
    }

    setDisplayNone() {
        if (this.state.inputTextVisible === "open") return;
        const inputText = document.querySelector('.search-bar__input-text');
        inputText.style.display = "none";
    }

    render() {
        return (
            <div className={"header__search-bar " + this.state.inputTextVisible}
                onMouseOver={this.showInputText}
                onMouseOut={this.hideInputText}>
                <input autoFocus 
                    type="text"
                    placeholder="Search something..."
                    className="search-bar__input-text"
                    value={this.state.inputTextValue}
                    onChange={this.changeInputTextValue}
                    onAnimationEnd={this.setDisplayNone} />
                <input className="search-bar__input-button"
                    type="button" />
            </div>
        )
    }
}

export default SearchBar;

