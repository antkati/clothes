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
        const {
            label = () => ({}),
            isMulti,
            options,
            container,
            control,
            menu,
            isSearchable = false,
            onChange = null,
            value = undefined,
            isClearable = true
        } = this.props;

        const stylesCustom = {
            container: (styles) => ({
                ...styles,
                ...container()
            }),
            control: () => ({
                display: 'flex',
                ...control(),
                ...label()
            }),
            indicatorSeparator: () => ({
                display: 'none'
            }),
            menu: (styles) => ({
                ...styles,
                borderRadius: 'none',
                boxShadow: 'none',
                ...menu()
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
            <Select isSearchable={isSearchable}
                isClearable={isClearable}
                isMulti={isMulti}
                options={options}
                isOptionDisabled={option => option.disable}
                defaultValue={this.searchSelectedOptions(options)}
                value={value}
                placeholder=""
                styles={stylesCustom}
                components={{ DropdownIndicator, ClearIndicator }}
                onChange={onChange}
            />
        )
    }
}

export default SelectStyled;


