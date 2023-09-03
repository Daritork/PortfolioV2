var itemInRow = 4;
var rowNum = 0;
let items = [/*[Name, Price]*/
["Green Tea", 5.05],
["Bag", 6.2], 
["Accesories", 4.95], 
["Presents", 7.99], 
["Box", 3.95]
];
for (let i = 0; i < items.length; i++) {
    let rowNumId = "Row" + (rowNum - 1);
    let itemProperties = items[i];
    const list = document.getElementById("itemList");
    const rowWithElements = document.getElementById(rowNumId);
    const newElement = document.createElement('td');
    const itemImage = document.createElement('img');
    itemImage.setAttribute("src", "sitepic/catalog/GreenTea.png");
    const row1 = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemNameNode = document.createTextNode(itemProperties[0]);
    const addToFavButton = document.createElement('button');
    addToFavButton.setAttribute("class", "favBut");
    const addToFavButontFavicon = document.createElement("img");
    addToFavButontFavicon.setAttribute("src", "sitepic/catalog/favourite.png", "class", "favButImg");
    const row2 = document.createElement('div');
    const itemPrice = document.createElement('p');
    let textNode = document.createTextNode(itemProperties[1] + " €");
    const buyButton = document.createElement('button');
    buyButton.setAttribute("class", "buyBut");
    const buyButtonText = document.createTextNode("Buy");
    /*Appending*/
    buyButton.appendChild(buyButtonText);
    itemPrice.appendChild(textNode);
    row2.appendChild(itemPrice);
    row2.appendChild(buyButton);
    addToFavButton.appendChild(addToFavButontFavicon);
    itemName.appendChild(itemNameNode);
    row1.appendChild(itemName);
    row1.appendChild(addToFavButton);
    newElement.appendChild(itemImage);
    newElement.appendChild(row1);
    newElement.appendChild(row2);
    list.appendChild(newElement);
    itemInRow++;
}
function Filter() {
    
}