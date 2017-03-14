import React from 'react';
import {render} from 'react-dom';

import './css/common.css';
import './css/home.css';


// push
import Push from './components/push/Push';
let push = new Push();


// header
import './components/header/header.css';

import City from './components/city/City.react';
import UserPanel from './components/header/UserPanel.react';
import Search from './components/search/Search.react';

render(<City />, document.getElementById('city-holder'));
render(<UserPanel />, document.getElementById('user-holder'));
render(<Search />, document.getElementById('search-holder'));

// nav
import './components/nav/nav.css';


// filter
import Filter from './components/filter/Filter';
let filter = new Filter();

import './components/filter/FilterSelect.css'; // 以后删掉


// focus
import Focus from './components/focus/focus';
let focus = new Focus();


// service
import Service from './components/service/Service.react';
render(<Service/>, document.getElementById('service-holder'));


// news
import News from './components/news/News';
let news = new News();


// guide
import Guide from './components/guide/guide';
let guide = new Guide();


// mall
render(<City/>, document.getElementById('mall-city-btn'));

import Mall from './components/mall/Mall';
let mall = new Mall();


// social
import Social from './components/social/Social';
let social = new Social();


// feature
import Feature from './components/feature/Feature.react';
render(<Feature/>, document.getElementById('feature-holder'));


// link
import Link from './components/link/Link';
let link = new Link();



// footer
import './components/footer/footer.css';

// sidebar
import Sidebar from './components/sidebar/Sidebar.react';
render(<Sidebar />, document.getElementById('sidebar'));


// vernier
import Vernier from './components/vernier/Vernier.react';
render(<Vernier />, document.getElementById('vernier-holder'));
