var products = new Array();
products[0] = "TV";
products[1] = "Mobile";
products[2] = "Nike Shoe";
var sales = [3400, 45600, 4200, 67000];
console.log("2nd Product : " + products[1]);
console.log("All Products : " + products.toString());
console.log("Products Joined :" + products.join("-->"));
console.log("Sliced from 1 :" + products.slice(1));
function Search(product) {
    return product == "Mobile";
}
console.log("Searching :" + products.find(Search));
console.log("Sales > 40000 :" + sales.filter(function (price) {
    return price >= 40000;
}));
