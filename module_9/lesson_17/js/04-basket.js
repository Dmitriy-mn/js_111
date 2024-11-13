const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");

const LS_KEY = 'basket';


const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
let totalCost;

if(products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price}) => acc += qty * price , 0);
}

totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClick);

function handleClick() {
    localStorage.removeItem(LS_KEY);
    window.location.href = "./03-shop.html";
}

function createMarkup(arr) {
    return arr.map(({ img, price, qty, name}) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img">
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p>
        </li>
    `).join("");
}

