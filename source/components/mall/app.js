import React from 'react';
import {render} from 'react-dom';
import City from '../city/City.react';
import Mall from './Mall';

render(<City/>, document.getElementById('mall-city-btn'));
let mall = new Mall();
