import { menuArray } from './scripts/data.js'
import getMenuHtml from './scripts/getMenuHtml.js';
import renderOrder from './scripts/renderOrder.js';

getMenuHtml(menuArray);

let orderArray = [];

document.addEventListener('click', function(e) {
    if(e.target.id === 'add-btn') {
        addItemToOrder(e);
    }
});

function addItemToOrder(e) {
    const parentId = e.target.parentElement.dataset.id;
    const menuItem = menuArray.filter(item => item.id === parentId)[0];
    const {name, price} = menuItem;
    orderArray.push(
        {
            orderId: orderArray.length,
            name, 
            price
        }
    );
    renderOrder(orderArray);
}