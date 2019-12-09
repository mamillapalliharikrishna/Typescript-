let yourPassword:string="john123A";
let regExp:any = /(?=.*[A-Z])\w{4,15}/;
if(yourPassword.match(regExp)) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}
