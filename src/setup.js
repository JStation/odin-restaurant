// create universal elements on the page then load info.js as default
const createHeader = () => {
    console.log('create header');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.classList.add('pulse');
    const span = document.createElement('span');
    span.innerText = "Hank's";
    span.classList.add('handwritten', 'neonText', 'pulse');
    h1.appendChild(span);
    h1.innerHTML += " CyberGrill";
    header.appendChild(h1);
    console.log(header);
    return header;
}

const createNav = () => {
    console.log('create nav element');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    nav.appendChild(ul);

    const li_info = document.createElement('li');
    const a_info = document.createElement('a');
    a_info.innerText = "Info";
    li_info.appendChild(a_info);
    ul.appendChild(li_info);

    const li_menu = document.createElement('li');
    const a_menu = document.createElement('a');
    a_menu.innerText = "Menu";
    li_menu.appendChild(a_menu);
    ul.appendChild(li_menu);

    const li_contact = document.createElement('li');
    const a_contact = document.createElement('a');
    a_contact.innerText = "Contact";
    li_contact.appendChild(a_contact);
    ul.appendChild(li_contact);

    return nav;
}

const createContentDiv = () => {
    const div = document.createElement('div');
    div.classList.add('content');
    return div;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerText = "Nutricorp Global © 2059";
    return footer;

}

const setupSite = () => {
    document.body.appendChild(createHeader());
    document.body.appendChild(createNav());
    document.body.appendChild(createContentDiv());
    document.body.appendChild(createFooter());
}

export default setupSite;