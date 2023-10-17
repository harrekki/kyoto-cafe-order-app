import { menuArray } from './data.js'

console.log(menuArray)

const menuElem = document.getElementById("menu");

function getMenuHtml() {
    let menuHtml = ``;

    menuArray.forEach(item => {
        menuHtml += `
            <article class="menu-item" data-id="${item.id}">
                <i class="menu-item__icon">${item.emoji}</i>
                <div class="menu-item__text">
                    <h3 class="item__title">${item.name}</h3>
                    <p class="item__ingredients">
                        ${item.ingredients.join(' | ')}
                    </p>
                    <p class="item__price">$${item.price}</p>
                </div>
                <button 
                    class="add-btn"
                    aria-label="Add to order"
                >
                    +
                </button>
            </article>
        `
    })

    return menuHtml;
}


menuElem.innerHTML = getMenuHtml();

    
