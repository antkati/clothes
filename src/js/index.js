import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js';

ReactDOM.render (
    <SearchBar profileWrap={document.getElementById('profile__wrap')} />,
    document.getElementById('search-bar__wrap')
)