var email = "raj123gmail.com";
var atpos = email.indexOf("@");
if (atpos == -1) {
    console.error("Invalid Email");
}
else {
    console.log("Email Verified..");
}
var emailId = email.substring(0, atpos);
var domain = email.substring(atpos + 1);
console.log("Your Id=" + emailId + "\n" + "Domain=" + domain);
