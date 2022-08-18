/*
HTML Template:
<div class="info">
    <h2>Fast and Tasty Food for Humans</h2>
    <img src="hanks_cybergrill.jpg" alt="A street shot of our Foundation alcove diner">
    <div class="text">
        <p>Hank's CyberGrill serves a variety of legally edible dishes in convenient locations throughout the
            Monoplastic District of New Detroit.</p>
        <p>No need for reservations. Our autonomous services and auto-prep stations are standing by 24/7 to feed
            you.</p>
    </div>
</div>
*/

const getInfoPage = () => {
    // populate and return info page for display in content div
    const div = document.createElement('div');
    div.classList.add('info');

    const h2 = document.createElement('h2');
    h2.innerText = "Fast and Tasty Food for Humans"
    div.appendChild(h2);

    // TODO: import image here
    
    const divText = document.createElement('div');
    divText.classList.add('text');
    
    const p1 = document.createElement('p');
    p1.innerText = "Hank's CyberGrill serves a variety of legally edible dishes in convenient locations throughout the Monoplastic District of New Detroit.";
    divText.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = "No need for reservations. Our autonomous services and auto-prep stations are standing by 24/7 to feed you.";
    divText.appendChild(p2);

    div.appendChild(divText);
    
    return div;
}



export default getInfoPage;