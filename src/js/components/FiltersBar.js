import React from "react";
import { Filter, Sort } from "./SelectStyled.js";
import ReactModal from "react-modal";
import iconCancel from "../images/cancel.png";
import "../styles/FiltersBar.css";

/* Фильтры десктопная версия */
export class FiltersBarDesktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filters=null, sort=null } = this.props;
        console.log(this.props.bla);
        
        const filterProps = {
            filters: filters,
            marginRight: '20px',
        }

        const sortProps = {
            sort: sort
        }

        return (
            <React.Fragment>
                {!!filters && <Filter {...filterProps} />}
                {!!sort && <Sort {...sortProps} />}
            </React.Fragment>
        )
    }
}

/* Фильтры мобильная версия */
export class FiltersBarMobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFiltersMenu: false
        };

        this.handleOpenFiltersMenu = this.handleOpenFiltersMenu.bind(this);
        this.handleCloseFiltersMenu = this.handleCloseFiltersMenu.bind(this);
    }    

    handleOpenFiltersMenu() {
        this.setState({
            showFiltersMenu: true            
        })
    }

    handleCloseFiltersMenu() {
        this.setState({
            showFiltersMenu: false            
        })
    }

    render() {
        const { filters=null, sort=null } = this.props;

        const filterProps = {
            filters: filters,
            marginBottom: '50px',
            width: '100%'
        }

        const sortProps = {
            sort: sort,
            marginBottom: '50px',
            marginTop: '40px',
            width: '100%'
        }
        
        return (
            <React.Fragment>
                <div className='filters__button--show font--georgia-i' onClick={this.handleOpenFiltersMenu}>Filters</div>

                <ReactModal
                    isOpen={this.state.showFiltersMenu}
                    contentLabel="Filters menu"
                    onRequestClose={this.handleCloseFiltersMenu}
                    className="filters__modal"
                    overlayClassName="filters__overlay"
                    closeTimeoutMS={700}
                >
                    <img className="filters__close"
                        src={iconCancel}
                        onClick={this.handleCloseFiltersMenu}
                    />
                    {!!sort && <Sort {...sortProps} />}
                    {!!filters && <Filter {...filterProps} />}
               </ReactModal> 
            </React.Fragment>
        )
    }
}
