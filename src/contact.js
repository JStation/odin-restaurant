/*
<div class="contact">
    <h2>Contact Us</h2>
    <img src="operator.jpg" alt="Friendly operator standing by">
    <div class="contactText">
        <p>Questions or comments? Delivery options?</p>
        <p>Reach out for more information via NanoNet, Neurotone, or even old-fashioned video phone courtesy of our vintage 2032 Dragn MA (Multimedia Agent).</p>
    </div>
</div>
*/
import ImageOperator from './operator.jpg';

const getContactPage = () => {
    // populate and return info page for display in content div
    const div = document.createElement('div');
    div.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.innerText = "Contact Us"
    div.appendChild(h2);

    const imgOperator = new Image();
    imgOperator.src = ImageOperator;
    imgOperator.alt = "Friendly operator standing by";
    div.appendChild(imgOperator);
    
    const divText = document.createElement('div');
    divText.classList.add('contactText');
    
    const p1 = document.createElement('p');
    p1.innerText = "Questions or comments? Delivery options?";
    divText.appendChild(p1);

    const p2 = document.createElement('p');
    p2.innerText = "Reach out for more information via NanoNet, Neurotone, or even old-fashioned video phone courtesy of our vintage 2032 Dragn MA/O (Multimedia Agent/Operator).";
    divText.appendChild(p2);

    div.appendChild(divText);
    
    return div;
}



export default getContactPage;