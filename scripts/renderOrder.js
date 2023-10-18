export default function renderOrder(orders) {
    const orderContainer = document.getElementById('order-container');
    const totalAmt = document.getElementById('total-amt');
    const checkoutElem = document.getElementById('checkout');
    
    let orderItemsHtml = orders.map(order => {
        return `
            <div class="order__item">
                <h3 class="order__item-name">${order.name}</h3>
                <button class="order__remove-btn">remove</button>
                <p class="order__price">$${order.price}</p>
            </div>
        `
    }).join('');

    orderContainer.innerHTML = orderItemsHtml;

    totalAmt.textContent = `$${calculateTotal(orders)}`;

    checkoutElem.style.display = 'block'
}

function calculateTotal(orders) {
    return orders.map(
        order => order.price
    ).reduce((total, current) => {
        return total + current;
    });
}