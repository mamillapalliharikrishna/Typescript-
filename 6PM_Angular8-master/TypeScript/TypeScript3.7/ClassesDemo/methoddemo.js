var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.PrintDetails = function (obj) {
        for (var property in obj) {
            console.log(property + ":" + obj[property]);
        }
    };
    return Demo;
}());
var obj = new Demo();
var prod = new Product();
prod.Name = "Samsung TV";
prod.Price = 45000.66;
var emp = new Employee();
emp.Name = "John";
emp.Salary = 56000.66;
emp.Designation = "Manager";
obj.PrintDetails(prod);
obj.PrintDetails(emp);
