let products:string[] = new Array();
products[0] = "TV";
products[1] = "Watch";
products[2] = "Shoe";
if(products.indexOf("Mobile")==-1) {
    console.log("Not found");
} else {
    console.log("Found at " + products.indexOf("Mobile"));
}