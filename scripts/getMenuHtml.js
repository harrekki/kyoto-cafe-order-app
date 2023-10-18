export default function getMenuHtml(menuArr) {
    const menuElem = document.getElementById("menu");

    let menuHtml = ``;

    menuArr.forEach(item => {
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
                    id="add-btn"
                    aria-label="Add to order"
                >
                    +
                </button>
            </article>
        `
    })

    menuElem.innerHTML += menuHtml;
}; 