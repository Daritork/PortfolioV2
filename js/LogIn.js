var login = false;
var pass = false;
var pass_again = false;
function Register() {
    login = false;
    pass = false;
    pass_again = false;
    const valueName = document.getElementById("name_reg").value;
    const valuePass = document.getElementById("pass_reg").value;
    const valuePass_a = document.getElementById("pass_ag_reg").value;
    if (valueName != "" && valueName.length >= 6) {
        login = true;
    }
    if (valuePass != "" && valuePass.length >= 8) {
        pass = true;
    }
    if (valuePass_a == valuePass) {
        pass_again = true;
    }
    if (login == true && pass == true && pass_again == true) {
        localStorage.setItem("logged", "true");
        localStorage.setItem("nickname", valueName);
        localStorage.setItem("passwort", valuePass);
        window.location.href = "AvocaHome.html";
    } else if (login == true && pass == true && pass_again == false) {
        Alert(1);
    } else if (login == false || pass == false) {
        Alert(2);
    }
}
function SignIn() {
    login = false;
    pass = false;
    const valueNameSign = document.getElementById("name_sign").value;
    const valuePassSign = document.getElementById("pass_sign").value;
    if (valueNameSign != "" && valueNameSign.length >= 6 && valueNameSign == localStorage.getItem("nickname")) {
        login = true;
    }
    if (valuePassSign != "" && valuePassSign.length >= 8 && valuePassSign == localStorage.getItem("passwort")) {
        pass = true;
    }
    if (login == true && pass == true) {
        localStorage.setItem("logged", "true");
        window.location.href = "AvocaHome.html";
    } else {
        Alert(3);
    }
}
function Alert(a) {
    const errpanel = document.getElementById("ErrPanel");
    const message = document.getElementById("message");
    errpanel.style.visibility = "visible";
    errpanel.style.border = "3px solid #121619";
    errpanel.style.transition = "0.2s";
    if (a == 1) {
        message.innerHTML = "Check your passworts";
        errpanel.style.height = "85px";
    } else if (a == 2) {
        message.innerHTML = "Fill all fields";
        errpanel.style.height = "65px";
    } else if (a == 3) {
        message.innerHTML = "Login or passwort invalid";
        errpanel.style.height = "85px";
    }
}
function alertClose() {
    const errpanel = document.getElementById("ErrPanel");
    errpanel.style.transition = "0s";
    errpanel.style.border = "0";
    errpanel.style.height = "0";
    errpanel.style.visibility = "hidden";
}
function cancel() {
    window.location.href = "AvocaHome.html";
    localStorage.setItem("logged", "false");
}