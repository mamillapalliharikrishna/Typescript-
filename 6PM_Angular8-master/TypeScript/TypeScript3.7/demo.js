var product = {
    Name: "TV",
    Price:4000
}
//delete product.Price;
if(product.Price==undefined) {
    console.log("Price Not Avail");
    console.log("Name=" + product.Name)
} else {
console.log("Name=" + product.Name + "\n" + "Price=" + product.Price);
}