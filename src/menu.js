/*
HTML Template:
<div class="menu">
    <h2>Currently Available</h2>
    <div class="items">
        <div class="item">
            <h3>Basic Burger</h3>
            <img src="./menu/burger.jpeg" alt="A burger with toppings">
        </div>
        <div class="item">
            <h3>Synthetic Sub</h3>
            <img src="./menu/sub.jpeg" alt="100% processed sub sandwich">
        </div>
        <div class="item">
            <h3>NutriPlus Noodles</h3>
            <img src="./menu/noodles.jpeg" alt="bowl of fortified noodles">
        </div>
        <div class="item">
            <h3>Phytoplankton Pie</h3>
            <img src="./menu/pie.jpeg" alt="A slice of the sea in pie form">
        </div>
    </div>
</div>
*/
import ImageBurger from './menu_pics/burger.jpeg';
import ImageSub from './menu_pics/sub.jpeg';
import ImageNoodles from './menu_pics/noodles.jpeg';
import ImagePie from './menu_pics/pie.jpeg';

const getMenuPage = () => {
    // populate and return info page for display in content div
    const div = document.createElement('div');
    div.classList.add('menu');

    const h2 = document.createElement('h2');
    h2.innerText = "Currently Available";
    div.appendChild(h2);

    const divItems = document.createElement('div');
    divItems.classList.add('items');

    divItems.appendChild(getItemElement(
        "Basic Burger",
        ImageBurger,
        "A very basic burger"
    ));

    divItems.appendChild(getItemElement(
        "Synthetic Sub",
        ImageSub,
        "A 100% processed sub sandwich"
    ));

    divItems.appendChild(getItemElement(
        "NutriPlus Noodles",
        ImageNoodles,
        "Bowl of fortified noodles"
    ));

    divItems.appendChild(getItemElement(
        "Phytoplankton Pie",
        ImagePie,
        "A slice of the sea in pie form"
    ));

    div.appendChild(divItems);
    
    return div;
}

const getItemElement = (name,src,alt) => {
    const div = document.createElement('div');
    div.classList.add('item');

    const h3 = document.createElement('h3');
    h3.innerText = name;
    div.appendChild(h3);

    const img = new Image();
    img.src = src;
    img.alt = alt;
    div.appendChild(img);

    return div;
}



export default getMenuPage;