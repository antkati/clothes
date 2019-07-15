import React from "react";
import Select, { components } from "react-select";
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
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '14px'
            }),
            control: () => ({
                display: 'flex',
                width: 200,
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
                width: 200
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
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '14px'
                }),
                control: () => ({
                    display: 'flex',
                    width: 200,
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
                    width: 200
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

/* Панель фильтров */
class FiltersDesktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { filters, sort } = this.props;

        return (
            <React.Fragment>
                <Filters filters={filters} />
                <Sort sort={sort} />
            </React.Fragment>
        )
    }
}


export default FiltersDesktop;