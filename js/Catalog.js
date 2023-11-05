var rowNum = 0;
var itemPriceNumber = 1;
let items = [/*[Name, Price]*/
["Green Tea", 5.05],
["Bag", 6.20], 
["Tea Set", 4.95], 
["Presents", 7.99], 
["Tea-Box", 3.95],
["Avocado Tea", 5.95],
["Avocado Teabags", 2.95],
["Tea Pot", 8.90],
["64 Bags Teabox", 10]
];
for (let i = 0; i < items.length; i++) {
    let itemProperties = items[i];
    const list = document.getElementById("itemList");
    const newElement = document.createElement('td');
    newElement.setAttribute("id", "elementNumber" + i);
    const itemImage = document.createElement('img');
    itemImage.setAttribute("src", "sitepic/catalog/GreenTea.png");
    const row1 = document.createElement('div');
    const itemName = document.createElement('h2');
    const itemNameNode = document.createTextNode(itemProperties[0]);
    const addToFavButton = document.createElement('button');
    addToFavButton.setAttribute("class", "fav-but");
    const addToFavButontFavicon = document.createElement("img");
    addToFavButontFavicon.setAttribute("src", "sitepic/catalog/favourite.png");
    addToFavButontFavicon.setAttribute("class", "fav-but_img");
    addToFavButton.setAttribute("onclick", "AddFavItem('" + itemProperties[0] + "', " + itemProperties[1] + ")");
    const row2 = document.createElement('div');
    const itemPrice = document.createElement('p');
    itemPrice.setAttribute("id", "itemPrice" + itemPriceNumber);
    let textNode = document.createTextNode(itemProperties[1].toFixed(2) + " €");
    const buyButton = document.createElement('button');
    buyButton.setAttribute("class", "buyBut");
    buyButton.setAttribute("onclick", "AddItem('" + itemProperties[0] + "', " + itemProperties[1] + ")");
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
    itemPriceNumber++;
}
function Filter() {

}