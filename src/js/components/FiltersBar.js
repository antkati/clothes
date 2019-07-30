import React from "react";
import SelectStyled from "./SelectStyled.js";
import ReactModal from "react-modal";
import iconCancel from "../images/cancel.png";
import "../styles/FiltersBar.css";

/* Компонент фильтров */
class Filter extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const { filters, container, control, menu } = this.props;

        const filtersList =  filters.map(filter => {
            const label = () => ({
                ':before': {
                    content: `'${filter.name}'`,
                    display: 'block',
                    marginRight: 8,
                    marginLeft: 8,
                    color: '#606060',
                    alignSelf: 'center'
                }
            });
            
            const filterProps = {
                key: filter.name,
                options: filter.options,
                isMulti: filter.isMulti,
                label: label,
                container: container,
                control: control,
                menu: menu
            }

            return <SelectStyled {...filterProps}/>
        })

        return filtersList;
    }
}


/* Компонент сортировки */
class Sort extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const { sort, container, control, menu } = this.props;

        const sortProps = {
            options: sort.options,
            isMulti: sort.isMulti,
            container: container,
            control: control,
            menu: menu,
            isClearable: false
        }
  
        return <SelectStyled {...sortProps} />;
    }
}



/* FilterBar десктопная версия */
export class FiltersBarDesktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filters=null, sort=null } = this.props;

        const containerFilter = () => ({
            fontFamily: 'Georgia, serif',  
            fontStyle: 'italic',
            fontSize: '14px'       
        })

        const containerSort = () => ({
            fontFamily: 'Georgia, serif',  
            fontStyle: 'italic',
            fontSize: '14px'       
        })

        const controlFilter = () => ({
            height: 'auto',
            width: '200px',
            borderBottom: '1px solid black',
            marginRight: '20px'
        })

        const controlSort = () => ({
            height: 'auto',
            width: '200px',
            borderBottom: '1px solid black'
        })

        const menuFilter = () => ({
            width: '200px',
            border: 'none'
        })

        const menuSort = () => ({
            width: '200px',
            border: 'none'
        })

        const filterProps = {
            filters: filters,
            container: containerFilter,
            control: controlFilter,
            menu: menuFilter
        }

        const sortProps = {
            sort: sort,
            container: containerSort,
            control: controlSort,
            menu: menuSort
        }

        return (
            <React.Fragment>
                {!!filters && <Filter {...filterProps} />}
                {!!sort && <Sort {...sortProps} />}
            </React.Fragment>
        )
    }
}

/* FilterBar мобильная версия */
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

        const containerSort = () => ({
            fontFamily: 'Georgia, serif',  
            fontStyle: 'italic',
            fontSize: '14px',
            marginTop: '40px',
            marginBottom: '50px'
        })
        
        const containerFilter = () => ({
            fontFamily: 'Georgia, serif',  
            fontStyle: 'italic',
            fontSize: '14px',
            marginTop: '0px',
            marginBottom: '50px'
        })

        const controlFilter = () => ({
            height: 'auto',
            width: '100%',
            borderBottom: '1px solid black'
        })

        const controlSort = () => ({
            height: 'auto',
            width: '100%',
            borderBottom: '1px solid black'
        })

        const menuFilter = () => ({
            width: '100%',
            border: 'none'
        })

        const menuSort = () => ({
            width: '100%',
            border: 'none'
        })

        const filterProps = {
            filters: filters,
            container: containerFilter,
            control: controlFilter,
            menu: menuFilter
        }

        const sortProps = {
            sort: sort,
            container: containerSort,
            control: controlSort,
            menu: menuSort
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
