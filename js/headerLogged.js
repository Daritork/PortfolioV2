var profile = false;
var ItemNumber = 1;
let a;
var Counter = [0];
var Code = [0];
function profileAction() {
    document.getElementById("UserInfo").innerHTML = "Hi, " + localStorage.getItem("nickname");
    if (profile == true) {
        Action(true);
    } else if (profile == false) {
        Action(false);
    }
}
function Action(a) {
    const logged = localStorage.getItem("logged");
    const accPanel_L = document.getElementById('accPanel_L');
    const accPanel_N = document.getElementById('accPanel_N');
    if (a == true) {
        profile = false;
    } else if (a == false) {
        profile = true;
    }
    if (a == false && logged == "true") {
        accPanel_L.style.height = "318px";
        accPanel_L.style.border = "3px solid #121619";
        accPanel_L.style.transition = "0.3s";
    } else if (a == false && logged == "false") {
        accPanel_N.style.height = "88px";
        accPanel_N.style.border = "3px solid #121619";
        accPanel_N.style.transition = "0.3s";
    } else if (a == false && (localStorage.length == 2 || localStorage.length == 0)) {
        accPanel_N.style.height = "88px";
        accPanel_N.style.border = "3px solid #121619";
        accPanel_N.style.transition = "0.3s";
    }
    if (a == true && logged == "true") {
        accPanel_L.style.transition = "0s";
        accPanel_L.style.height = "0";
        accPanel_L.style.border = "0";
    } else if (a == true && logged == "false") {
        accPanel_N.style.transition = "0s";
        accPanel_N.style.height = "0";
        accPanel_N.style.border = "0";
    } else if (a == true && (localStorage.length == 2 || localStorage.length == 0)) {
        accPanel_N.style.height = "0";
        accPanel_N.style.border = "0";
        accPanel_N.style.transition = "0";
    }
}
function logOut() {
    window.location.href = "AvocaHome.html";
    localStorage.setItem("logged", "false");
}
function CartListAction(Action) {
    const logged = localStorage.getItem("logged");
    if (Action === 1 && logged === "true") {
        cartPanel_L.style.transition = "all 0.3s ease";
        cartPanel_L.style.right = "18px";
        cartPanel_L.style.visibility = "visible";
    } else if (Action === 2 && logged === "true") {
        cartPanel_L.style.visibility = "hidden";
        cartPanel_L.style.transition = "0s";
        cartPanel_L.style.right = "-300px";
    } else if (Action === 1 && logged === "false") {
        Panel_N.style.transition = "all 0.3s ease";
        Panel_N.style.right = "18px";
        Panel_N.style.visibility = "visible";
        document.getElementById("NotLoggedTitle").innerHTML = "Cart";
    } else if (Action === 2 && logged === "false") {
        Panel_N.style.visibility = "hidden";
        Panel_N.style.transition = "0s";
        Panel_N.style.right = "-300px";
    }
}
function Amount(amountChange) {
    var CodeNumbers = String(amountChange).split("").map((amountChange)=>{
        return Number(amountChange);
    })
    console.log(CodeNumbers);
    const itemAmount = document.getElementById("itemAmount" + CodeNumbers[0]);
    const deleteRow = document.getElementById("rowNum" + CodeNumbers[0]);
    if (CodeNumbers[1] === 1 && Counter[CodeNumbers[0]] != 0) {
        Counter[CodeNumbers[0]]--;
        itemAmount.innerHTML = Counter[CodeNumbers[0]];
    }
    if (CodeNumbers[1] === 1 && Counter[CodeNumbers[0]] === 0) {
        deleteRow.parentNode.removeChild(deleteRow);
    }
    if (CodeNumbers[1] === 2 && Counter[CodeNumbers[0]] != 10) {
        Counter[CodeNumbers[0]]++;
        itemAmount.innerHTML = Counter[CodeNumbers[0]];
    }
    TotalPrice();
}
function TotalPrice(){
    var price = 0;
    for (let i=1; i < Counter.length; i++) {
        price = price + (Counter[i]*5);
    }
    document.getElementById("totalPrice").innerHTML = price + " €";
}
function AddItem() {
    Counter.push(1);
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
    amountText.setAttribute("id", "itemAmount" + ItemNumber);
    const amountInnerText = document.createTextNode(Counter[ItemNumber]);
    const newPoleText = document.createTextNode('Item ' + ItemNumber);
    plusBut.appendChild(plusButText);
    plusBut.setAttribute("onclick", "Amount("+ItemNumber+"_2)");
    amountText.appendChild(amountInnerText);
    minusBut.appendChild(minusButText);
    minusBut.setAttribute("onclick", "Amount("+ItemNumber+"_1)");
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