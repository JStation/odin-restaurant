console.log("index.js processed and loaded");

import css from "./style.css";
import setupSite from "./setup.js";
import getInfoPage from "./info";

// Overview
// Load Page w/ static components (header, nav, empty container div, footer)
// handle click events on nav links to trigger page modules (info, menu, contact)
// load info module by default

setupSite();

const content = document.querySelector('.content');
console.log('content');
content.appendChild(getInfoPage());