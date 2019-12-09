let product:object;
product = {
    Id:1,
    Name:"Samsung TV",
    IsInStock:true,
    Price:45000.53,
    Quantity:2,
    ShippedTo:["Delhi","Hyd"],
    Total: function(){
        return product.Quantity * product.Price;
    },
    Print: function(){
        console.log("Name=" + product.Name + "\n" + "Price=" + product.Price + "\n" + "Quantity=" + product.Quantity + "\n" + "Total=" + product.Total() + "\n" + "Shipped To=" + product.ShippedTo.toString());
    }
}
product.Print();
product.Name="Nike Casuals";
product.Price=5460.44;
product.Quantity=3;
product.ShippedTo=["Mumbai","Chennai"];
product.Print();