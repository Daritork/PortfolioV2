var profile = false;
let a;
var ItemNumber = 1;
var ItemFavNumber = 1;
/*Items in cart*/
var Counter = [0];
var itemPrice = [0];
/**/
var FavCode = [0];
var lastDigit;
var sideWindowOpened = false;
function profileAction() {
    document.getElementById("UserInfo").innerHTML = "Hi, " + localStorage.getItem("nickname");
    if (profile == true) {
        Action(true);
    } else if (profile == false && sideWindowOpened == false) {
        Action(false);
    }
}
function Action(a) {
    const logged = localStorage.getItem("logged");
    const accPanel_L = document.getElementById('accPanel_L');
    const accPanel_N = document.getElementById('accPanel_N');
    if (a == false && logged == "true") {
        accPanel_L.style.height = "318px";
        accPanel_L.style.border = "3px solid #121619";
        accPanel_L.style.transition = "0.3s";
    } else if (a == false && (logged == "false" || localStorage.length == 2 || localStorage.length == 0)) {
        accPanel_N.style.height = "88px";
        accPanel_N.style.border = "3px solid #121619";
        accPanel_N.style.transition = "0.3s";
    }
    if (a == true && logged == "true") {
        accPanel_L.style.transition = "0s";
        accPanel_L.style.height = "0";
        accPanel_L.style.border = "0";
    } else if (a == true && (logged == "false" || localStorage.length == 2 || localStorage.length == 0)) {
        accPanel_N.style.transition = "0s";
        accPanel_N.style.height = "0";
        accPanel_N.style.border = "0";
    }
    if (a == true) {
        profile = false;
        sideWindowOpened = false;
    } else if (a == false) {
        profile = true;
        sideWindowOpened = true;
    }
}
function logOut() {
    window.location.href = "AvocaHome.html";
    localStorage.setItem("logged", "false");
}
function CartListAction(Action) {
    const logged = localStorage.getItem("logged");
    if (Action === 1 && logged === "true" && sideWindowOpened == false) {
        cartPanel_L.style.transition = "all 0.3s ease";
        cartPanel_L.style.right = "18px";
        cartPanel_L.style.visibility = "visible";
        sideWindowOpened = true;
    } else if (Action === 2 && logged === "true") {
        cartPanel_L.style.visibility = "hidden";
        cartPanel_L.style.transition = "0s";
        cartPanel_L.style.right = "-300px";
        sideWindowOpened = false;
    } else if (Action === 1 && sideWindowOpened == false &&(logged === "false" || localStorage.length == 2 || localStorage.length == 0)) {
        document.getElementById("NotLoggedTitle").innerHTML = "Cart";
        Panel_N.style.transition = "all 0.3s ease";
        Panel_N.style.right = "18px";
        Panel_N.style.visibility = "visible";
        sideWindowOpened = true;
    } else if (Action === 2 && (logged === "false" || localStorage.length == 2 || localStorage.length == 0)) {
        Panel_N.style.visibility = "hidden";
        Panel_N.style.transition = "0s";
        Panel_N.style.right = "-300px";
        sideWindowOpened = false;
    }
}
function Amount(amountChange) {
    var CodeNumbers = String(amountChange).split("").map((amountChange)=>{
        return Number(amountChange);
    });
    lastDigit = CodeNumbers.pop();
    const itemNum = Number(CodeNumbers.join(''));
    const itemAmount = document.getElementById("itemAmount" + itemNum);
    const deleteRow = document.getElementById("rowNum" + itemNum);
    if (lastDigit === 1 && Counter[itemNum] != 0) {
        Counter[itemNum]--;
        itemAmount.innerHTML = Counter[itemNum];
    }
    if (lastDigit === 1 && Counter[itemNum] === 0) {
        deleteRow.parentNode.removeChild(deleteRow);
    }
    if (lastDigit === 2 && Counter[itemNum] != 10) {
        Counter[itemNum]++;
        itemAmount.innerHTML = Counter[itemNum];
    }
    TotalPrice();
}
function TotalPrice(){
    var price = 0;
    for (let i = 1; i < Counter.length; i++) {
        price = price + (Counter[i] * itemPrice[i]);
    }
    let lastPrice = price.toFixed(2);
    document.getElementById("totalPrice").innerHTML = lastPrice + " €";
}
function AddItem(itemName, price) { /*creating new item*/
    Counter.push(1);
    itemPrice.push(price);
    let name = itemName;
    const cartList = document.getElementById('CartProductList');
    const newRow = document.createElement('tr');
    newRow.setAttribute("id", "rowNum" + ItemNumber);
    const newPole1 = document.createElement('td');
    const newPole2 = document.createElement('td');
    const adjustPanel = document.createElement("div");
    const minusBut = document.createElement("button");
    const minusButText = document.createTextNode(`-`);
    const plusBut = document.createElement("button");
    const plusButText = document.createTextNode(`+`);
    const amountText = document.createElement("p");
    const amountInnerText = document.createTextNode(Counter[ItemNumber]);
    amountText.setAttribute("id", "itemAmount" + ItemNumber);
    const newPoleText = document.createTextNode(name);
    /**/
    plusBut.appendChild(plusButText);
    plusBut.setAttribute("onclick", "Amount(" + ItemNumber + "_2)");
    amountText.appendChild(amountInnerText);
    minusBut.appendChild(minusButText);
    minusBut.setAttribute("onclick", "Amount(" + ItemNumber + "_1)");
    adjustPanel.appendChild(minusBut);
    adjustPanel.appendChild(amountText);
    adjustPanel.appendChild(plusBut);
    newPole2.appendChild(adjustPanel);
    newPole1.appendChild(newPoleText);
    newRow.appendChild(newPole1)
    newRow.appendChild(newPole2);
    cartList.appendChild(newRow);
    ItemNumber++;
    TotalPrice();
}
function FavListAction(ActionF) {
    const logged = localStorage.getItem("logged");
    if (ActionF === 1 && logged === "true" && sideWindowOpened == false) {
        favouritePanel_L.style.transition = "all 0.3s ease";
        favouritePanel_L.style.right = "18px";
        favouritePanel_L.style.visibility = "visible";
        sideWindowOpened = true;
    } else if (ActionF === 2 && logged === "true") {
        favouritePanel_L.style.visibility = "hidden";
        favouritePanel_L.style.transition = "0s";
        favouritePanel_L.style.right = "-400px";
        sideWindowOpened = false;
    } else if (ActionF === 1 && sideWindowOpened == false && (logged === "false" || localStorage.length == 2 || localStorage.length == 0)) {
        document.getElementById("NotLoggedTitle").innerHTML = "Favourite";
        Panel_N.style.transition = "all 0.3s ease";
        Panel_N.style.right = "18px";
        Panel_N.style.visibility = "visible";
        sideWindowOpened = true;
    } else if (ActionF === 2 && (logged === "false" || localStorage.length == 2 || localStorage.length == 0)) {
        Panel_N.style.visibility = "hidden";
        Panel_N.style.transition = "0s";
        Panel_N.style.right = "-400px";
        sideWindowOpened = false;
    }
}
function AddFavItem(itemName, price) {
    const favTBody = document.getElementById("favouriteProductList");
    const newRow = document.createElement('tr');
    newRow.setAttribute("id", "rowNum" + ItemFavNumber);
    const newPole1 = document.createElement('td');
    newPole1.setAttribute("class", "favFirstTd");
    const newPole2 = document.createElement('td');
    const newPole3 = document.createElement('td');
    const amountText = document.createElement("p");
    amountText.setAttribute("id", "itemAmount" + ItemFavNumber);
    const newPoleText = document.createTextNode(itemName);
    const addToCartBut = document.createElement("button");
    addToCartBut.setAttribute("onclick", "AddItem('"+ itemName +"', " + price + ")");
    const addToCartImg = document.createElement("img");
    addToCartImg.setAttribute("src", "sitepic/AddToCart.png");
    const favBut = document.createElement("button");
    favBut.setAttribute("onclick", "DelItem('"+ ItemFavNumber +"')");
    const favImg = document.createElement("img");
    favImg.setAttribute("src", "sitepic/Favourite.png");
    /* */
    favBut.appendChild(favImg);
    newPole3.appendChild(favBut);
    addToCartBut.appendChild(addToCartImg);
    newPole2.appendChild(addToCartBut);
    amountText.appendChild(newPoleText);
    newPole1.appendChild(amountText);
    newRow.appendChild(newPole1);
    newRow.appendChild(newPole2);
    newRow.appendChild(newPole3);
    favTBody.appendChild(newRow);
    ItemFavNumber++;
}
function DelItem(favItemNum) {
    const deleteRow = document.getElementById("rowNum" + favItemNum);
    deleteRow.parentNode.removeChild(deleteRow);
}
function CatalogPage() {
    window.location.href = "Catalog.html";
}