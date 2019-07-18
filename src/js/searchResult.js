import React from 'react';
import ReactDOM from 'react-dom';
import { FiltersBarDesktop, FiltersBarMobile } from './components/FiltersBar.js';

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

ReactDOM.render(<FiltersBarDesktop sort={SORT}/>, document.getElementById('sort-wrap'));

ReactDOM.render(<FiltersBarMobile sort={SORT}/>, document.getElementById('sort-wrap--mobile'));