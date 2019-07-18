import React from "react";
import Select, { components } from "react-select";
import "../styles/Filters.css";
import deleteFilters from "../images/delete-basket.png";

/* Элементы стиля */
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

/* Cелект */
class SelectStyled extends React.Component {
    constructor(props) {
        super(props);
    } 

    searchSelectedOptions(arr) {
        let selectedOptions = arr.filter(option => option.selected);
        return selectedOptions;
    }

    render() {
        const { label=()=>({}), width, marginRight, marginBottom, marginTop, isMulti, options } = this.props;

        const stylesCustom = {
            container: (styles) => ({
                ...styles,
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '14px',
                marginBottom: marginBottom,
                marginTop: marginTop
            }),
            control: () => ({
                display: 'flex',
                height: 'auto',
                borderBottom: '1px solid black',
                marginRight: marginRight,
                width: width,  
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
                width: width  
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
            <Select styles={stylesCustom}
                options={options}
                isSearchable={false}
                isMulti={isMulti}
                placeholder="" 
                components={{ DropdownIndicator, ClearIndicator }}
                isOptionDisabled={option => option.disable}
                defaultValue={this.searchSelectedOptions(options)}
            />
        ) 
    }

}

export default SelectStyled;


/* Компонент фильтров */
export class Filter extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const { filters, marginRight='20px', width='200px', marginBottom='0px', marginTop='0px' } = this.props;

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
                marginRight: marginRight,
                width: width,
                marginBottom: marginBottom,
                marginTop: marginTop
            }

            return (
                <SelectStyled {...filterProps}/>
            ) 
        })

        return filtersList;
    }
}


/* Компонент сортировки */
export class Sort extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        const { sort, marginRight='0px', width='200px', marginBottom='0px', marginTop='0px' } = this.props;

        const sortProps = {
            options: sort.options,
            isMulti: sort.isMulti,
            marginRight: marginRight,
            marginBottom: marginBottom,
            marginTop: marginTop,
            width: width
        }

        const sortSelect = <SelectStyled {...sortProps} />;
    
        return sortSelect;
    }
}
