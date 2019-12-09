var product = {
    Name: "TV",
    Price: 45000.64
};
//delete product.Price;
if (product.Price == undefined) {
    console.log("Name=" + product.Name);
}
else {
    console.log("Name=" + product.Name + "\n" + "Price=" + product.Price);
}
