import { menuArray } from './scripts/data.js'
import getMenuHtml from './scripts/getMenuHtml.js';
import renderOrder from './scripts/renderOrder.js';

getMenuHtml(menuArray);

let orderArray = [];

document.addEventListener('click', function(e) {
    if(e.target.id === 'add-btn') {
        addItemToOrder(e);
    } else if(e.target.id === 'remove-btn') {
        removeItemFromOrder(e);
    } else if(e.target.id === 'complete-btn') {
        displayModal();
    }
});

function addItemToOrder(e) {
    const parentId = e.target.parentElement.dataset.id;
    const menuItem = menuArray.filter(item => item.id === parentId)[0];
    const {name, price} = menuItem;
    orderArray.push(
        {
            orderId: orderArray.length + 1,
            name, 
            price
        }
    );
    renderOrder(orderArray);
}

function removeItemFromOrder(e) {
    const orderId = Number(e.target.parentElement.dataset.orderId);
    let orderIndex;
    orderArray.forEach((order, index) => {
        if(orderId === order.orderId) {
            orderIndex = index;
        }
    });

    orderArray.splice(orderIndex, 1);
    renderOrder(orderArray);
}

function displayModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "block";
}