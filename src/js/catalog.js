import React from 'react';
import ReactDOM from 'react-dom';
import { FiltersBarDesktop, FiltersBarMobile } from './components/FiltersBar.js';

const FILTERS = [
    {
        name: 'Size',
        type: 'select',
        isMulti: true,
        options: [
            {
                value: '26',
                label: '26',
                selected: false,
                disable: true
            },
            {
                value: '27',
                label: '27',
                selected: true,
                disable: false
            },
            {
                value: '28',
                label: '28',
                selected: true,
                disable: false
            },
            {
                value: '29',
                label: '29',
                selected: false,
                disable: false
            },
            {
                value: '30',
                label: '30',
                selected: false,
                disable: true
            }
        ]
    },
    {
        name: 'Color',
        type: 'select',
        isMulti: true,
        options: [
            {
                value: 'white',
                label: 'white',
                selected: false,
                disable: false
            },
            {
                value: 'grey',
                label: 'grey',
                selected: false,
                disable: false
            },
            {
                value: 'pink',
                label: 'pink',
                selected: false,
                disable: false
            },
            {
                value: 'blue',
                label: 'blue',
                selected: false,
                disable: false
            },
            {
                value: 'black',
                label: 'black',
                selected: false,
                disable: false
            },
            {
                value: 'orange',
                label: 'orange',
                selected: true,
                disable: false
            }
        ]
    },
    {
        name: 'Price',
        type: 'select',
        isMulti: false,
        options: [
            {
                value: '€20-30',
                label: '€20-30',
                selected: false,
                disable: false
            },
            {
                value: '€30-50',
                label: '€30-50',
                selected: false,
                disable: false
            },
            {
                value: '€50-100',
                label: '€50-100',
                selected: false,
                disable: false
            },
            {
                value: '€100 and more',
                label: '€100 and more',
                selected: true,
                disable: false
            }
        ]
    }
];

const SORT = {
    name: 'Sort',
    type: 'select',
    isMulti: false,
    options: [
        {
            value: 'Popularity',
            label: 'Popularity',
            selected: true,
            disable: false
        },
        {
            value: 'Price ascending',
            label: 'Price ascending',
            selected: false,
            disable: false
        },
        {
            value: 'Price descending',
            label: 'Price descending',
            selected: false,
            disable: false
        },
        {
            value: 'Newest Arrivals',
            label: 'Newest Arrivals',
            selected: false,
            disable: false
        }
    ]
}

ReactDOM.render(<FiltersBarDesktop filters={FILTERS} sort={SORT}/>, document.getElementById('filters-wrap'));

ReactDOM.render(<FiltersBarMobile filters={FILTERS} sort={SORT}/>, document.getElementById('filters__wrap--mobile'));