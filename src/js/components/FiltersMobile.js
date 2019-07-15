import React from "react";
import ReactModal from "react-modal";
import Select, { components } from "react-select";
import iconCancel from "../images/cancel.png";
import "../styles/FiltersMobile.css";
import "../styles/FiltersDesktop.css";
import deleteFilters from "../images/delete-basket.png";

/* Элементы стиля фильтров */
const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i className="arrow-bottom"></i>
      </components.DropdownIndicator>
    );
};

const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <img className="deleteFilters" src={deleteFilters} />
      </components.ClearIndicator>
    );
};


/* Компонент сортировки */
class Sort extends React.Component {
    constructor(props) {
        super(props);
    } 

    searchSelectedOptions(arr) {
        let selectedOptions = arr.filter(option => option.selected);
        return selectedOptions;
    }

    render() {
        const { sort } = this.props;

        const stylesSort = {
            container: (styles) => ({
                ...styles,
                width: '100%',
                marginTop: 40,
                marginBottom: 50,
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '14px'
            }),
            control: () => ({
                display: 'flex',
                width: '100%',
                height: 'auto',
                borderBottom: '1px solid black'
            }),
            indicatorSeparator: () => ({
                display: 'none'
            }),
            menu: (styles) => ({
                ...styles,
                borderRadius: 'none',
                border: 'none',
                boxShadow: 'none',
                width: '100%'
            }),
            option: (styles, { isDisabled, isFocused, isSelected }) => ({
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                    ? '#f4f4f4'
                    : isFocused
                    ? '#e1e1e1'
                    : null,
                color: !isDisabled 
                    ? '#606060'
                    : '#9a9a9a',
                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled && (isSelected ? '#f4f4f4' : '#f4f4f4')
                }
            }),
            multiValue: (styles) => ({
                ...styles,
                backgroundColor: '#f4f4f4'
            }),
            multiValueRemove: (styles) => ({
                ...styles,
                ':hover': {
                    backgroundColor: '#eaeaea',
                    color: null
                }
            })
        }

        const sortList = <Select key={sort.name}
            styles={stylesSort}
            options={sort.options}
            isSearchable={false}
            isMulti={sort.isMulti}
            placeholder="" 
            components={{ DropdownIndicator, ClearIndicator }}
            isOptionDisabled={option => option.disable}
            defaultValue={this.searchSelectedOptions(sort.options)}
        />;
    
        return sortList;
    }
}


/* Компонент фильтров */
class Filters extends React.Component {
    constructor(props) {
        super(props);
    } 

    searchSelectedOptions(arr) {
        let selectedOptions = arr.filter(option => option.selected);
        return selectedOptions;
    }

    render() {
        const { filters } = this.props;

        const filtersList =  filters.map(filter => {
            let filterName = filter.name;

            const label = () => ({
                ':before': {
                    content: `'${filterName}'`,
                    display: 'block',
                    marginRight: 8,
                    marginLeft: 8,
                    color: '#606060',
                    alignSelf: 'center'
                }
            });
            
            const stylesFilters = {
                container: (styles) => ({
                    ...styles,
                    width: '100%',
                    marginBottom: 50,
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '14px'
                }),
                control: () => ({
                    display: 'flex',
                    width: '100%',
                    height: 'auto',
                    marginRight: 20,
                    borderBottom: '1px solid black',
                    ...label()
                }),
                indicatorSeparator: () => ({
                    display: 'none'
                }),
                menu: (styles) => ({
                    ...styles,
                    borderRadius: 'none',
                    border: 'none',
                    boxShadow: 'none',
                    width: '100%'
                }),
                option: (styles, { isDisabled, isFocused, isSelected }) => ({
                    ...styles,
                    backgroundColor: isDisabled
                        ? null
                        : isSelected
                        ? '#f4f4f4'
                        : isFocused
                        ? '#e1e1e1'
                        : null,
                    color: !isDisabled 
                        ? '#606060'
                        : '#9a9a9a',
                    ':active': {
                        ...styles[':active'],
                        backgroundColor: !isDisabled && (isSelected ? '#f4f4f4' : '#f4f4f4')
                    }
                }),
                multiValue: (styles) => ({
                    ...styles,
                    backgroundColor: '#f4f4f4'
                }),
                multiValueRemove: (styles) => ({
                    ...styles,
                    ':hover': {
                        backgroundColor: '#eaeaea',
                        color: null
                    }
                })
            }

            return (
                <Select key={filter.name}
                    styles={stylesFilters}
                    options={filter.options}
                    isSearchable={false}
                    isMulti={filter.isMulti}
                    placeholder="" 
                    components={{ DropdownIndicator, ClearIndicator }}
                    isOptionDisabled={option => option.disable}
                    defaultValue={this.searchSelectedOptions(filter.options)}
                />
            ) 
        })

        return filtersList;
    }
}


/* Модальное окно */
class FiltersMobile extends React.Component {
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
        const { filters, sort } = this.props;
        
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
                    <Sort sort={sort} />
                    <Filters filters={filters} />
               </ReactModal> 
            </React.Fragment>
        )
    }
}

export default FiltersMobile;