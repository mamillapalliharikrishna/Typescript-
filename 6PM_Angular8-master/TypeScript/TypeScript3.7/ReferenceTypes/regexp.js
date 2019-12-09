var yourPassword = "john123A";
var regExp = /(?=.*[A-Z])\w{4,15}/;
if (yourPassword.match(regExp)) {
    console.log("Strong Password");
}
else {
    console.log("Weak Password");
}
