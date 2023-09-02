let items = ["Green Tea", "Bag", "Accesories", "Presents", "Box"];
let itemPrice = [5.00, 5.00, 5.00, 5.00, 5.00];
function Filter() {
    for (let i = 0; i < items.length; i++) {
        const listBody = document.getElementById("itemList");
        const newElement = document.createElement('td');
        const itemImage = document.createElement('img');
        const row1 = document.createElement('div');
        const row2 = document.createElement('div');
        const itemName = document.createElement('p');
        const addToCartButton = document.createElement('button');
        const itemPrice = document.createElement('p');
        const buyButton = document.createElement('button');
        const textNode = document.createTextNode(items[i]);
        itemName.appendChild(textNode);
        newElement.appendChild(itemName);
        listBody.appendChild(newElement);
    }
}