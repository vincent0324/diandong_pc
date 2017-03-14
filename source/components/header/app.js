import React from 'react';
import {render} from 'react-dom';
import City from '../city/City.react';
import UserPanel from './UserPanel.react';
import Search from '../search/Search.react';

render(<City />, document.getElementById('city-holder'));
render(<UserPanel />, document.getElementById('user-holder'));
render(<Search/>, document.getElementById('search-holder'));
