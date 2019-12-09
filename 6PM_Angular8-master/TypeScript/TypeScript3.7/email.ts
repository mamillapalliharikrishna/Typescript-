let email:string = "raj123gmail.com";
let atpos:number = email.indexOf("@");
if(atpos==-1) {
    console.error("Invalid Email");
}else {
    console.log("Email Verified..");
}
let emailId:string = email.substring(0,atpos);
let domain:string = email.substring(atpos + 1);
console.log("Your Id=" + emailId + "\n" + "Domain=" + domain);