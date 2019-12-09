var electronics = ["TV", "Mobile"];
var shoes = ["Nike Casuals", "Lee Cooper Boot"];
var products = electronics.concat(shoes);
electronics.copyWithin(1, 1);
console.log("Electronics=" + electronics.toString());
console.log("Products=" + products.toString());
