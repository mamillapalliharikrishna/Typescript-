interface IProduct {
    readonly Name:string;
    Price:number;
}
let product:IProduct = {
    Name:"TV",
    Price:61100.45,
}
product.Name = "Samsung TV";
product.Price = 40000.56;
console.log("Name=" + product.Name);

