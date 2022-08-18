console.log("index.js processed and loaded");

import css from "./style.css";
import setupSite from "./setup.js";
import getInfoPage from "./info";
import getMenuPage from "./menu";

// Overview
// Load Page w/ static components (header, nav, empty container div, footer)
// handle click events on nav links to trigger page modules (info, menu, contact)
// load info module by default

const loadContent = (content) => {
    const divContent = document.querySelector('.content');
    divContent.replaceChildren(content);
}

const handleTabClick = (evt) => {
    loadContent(evt.currentTarget.pageLoader());
    activateTab(evt.currentTarget);
}

const activateTab = (tab) => {
    // clear all tabs
    const tabs = document.querySelectorAll('nav a');
    for (let i = 0;i<tabs.length;i++) {
        tabs[i].classList.remove('neonText');
    }
    tab.classList.add('neonText');
}

const setupNavLinks = () => {
    const infoLink = document.querySelector("#infolink");
    infoLink.pageLoader = getInfoPage;
    infoLink.addEventListener("click", handleTabClick);
    activateTab(infoLink);

    const menuLink = document.querySelector("#menulink");
    menuLink.pageLoader = getMenuPage;
    menuLink.addEventListener("click", handleTabClick);
}

setupSite();
setupNavLinks();

loadContent(getInfoPage());

