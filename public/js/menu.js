let currentMenuCardsDiv = document.querySelector('.current.menu-cards-div');
let otherMenuCardsDiv = document.querySelector('.other.menu-cards-div');
let currentMenuCardsHtml = "";
let otherMenuCardsHtml = "";
let databaseList = [
    {
        "title": "Huckleberry Cheesecake",
        "price": 2.00,
        "current": true,
        "info": "Stuffed with huckleberry cream cheese filling.", 
        "topPath": "../imgs/huckleberry1.jpg",
        "sidePath": "../imgs/huckleberry4.jpg"
    },
    {
        "title": "Lemon",
        "price": 2.00,
        "current": false,
        "info": "Filled with creamy vanilla butter cream and a sweet tangy lemon curd center.",
        "topPath": "../imgs/lemon1.jpg",
        "sidePath": "../imgs/lemon2.jpg"
    },
    {
        "title": "Orange Creamsicle",
        "price": 2.00,
        "current": true,
        "info": "Filled with orange creamsicle flavored buttercream.",
        "topPath": "../imgs/orange1.jpg",
        "sidePath": "../imgs/orange2.jpg"
    },
    {
        "title": "Strawberry",
        "price": 2.00,
        "current": false,
        "info": "Filled with strawberry buttercream with sugar sprinkles on the sides.",
        "topPath": "../imgs/strawberry3.jpg",
        "sidePath": "../imgs/strawberry2.jpg"
    },
    {
        "title": "Swanky Dip",
        "price": 2.50,
        "current": false,
        "info": "Chocolate ganache dipped in lush dark chocolate.",
        "topPath": "../imgs/swankydip3.jpg",
        "sidePath": "../imgs/swankydip4.jpg"
    },
    {
        "title": "Mango",
        "price": 2.50,
        "current": false,
        "info": "Chocolate ganache dipped in lush dark chocolate.",
        "topPath": "../imgs/mango1.jpg",
        "sidePath": "../imgs/mangostrawberry4.jpg"
    },
    {
        "title": "Cotton Candy",
        "price": 2.00,
        "current": false,
        "info": "Filled with cotton candy flavored buttercream.",
        "topPath": "../imgs/cottoncandy1.jpg",
        "sidePath": "../imgs/cottoncandy2.jpg"
    },
]

databaseList.forEach(item => {
    if (item.current) {
        currentMenuCardsHtml += `
            <div class='menu-card'>
                <img src='${item.topPath}' class='menu-card-img'>
                <img src='${item.sidePath}' class='menu-card-hover-img'>
                <h3>${item.title} | $${item.price}</h3>
                <p>${item.info}</p>
            </div>
        `;
    } else {
        otherMenuCardsHtml += `
            <div class='menu-card'>
                <img src='${item.topPath}' class='menu-card-img'>
                <img src='${item.sidePath}' class='menu-card-hover-img'>
                <h3>${item.title} | $${item.price}</h3>
                <p>${item.info}</p>
            </div>
        `;
    }
});

currentMenuCardsDiv.innerHTML = currentMenuCardsHtml;
otherMenuCardsDiv.innerHTML = otherMenuCardsHtml;
