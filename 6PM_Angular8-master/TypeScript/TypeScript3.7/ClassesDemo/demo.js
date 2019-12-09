var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
    }
    ProductTemplate.prototype.Print = function () {
        console.log("Print all product Details");
    };
    return ProductTemplate;
}());
var Product = /** @class */ (function () {
    function Product() {
        this.Id = 1;
        this.Name = "TV";
        this.Price = 46000.66;
        this.Qty = 2;
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    Product.prototype.Print = function () {
        console.log("Id=" + this.Id + "\n" + "Name=" + this.Name + "\n" + "Price=" + this.Price + "\n" + "Qty=" + this.Qty + "\n" + "Total=" + this.Total());
    };
    return Product;
}());
var product = new Product();
product.Print();
