let msg:string = "welcOME TO typeScript";
let firstChar:string = msg.charAt(0);
let restChars:string = msg.substring(1);
let newMsg:string = firstChar.toUpperCase() + restChars.toLowerCase();
console.log(msg);
console.log(newMsg);