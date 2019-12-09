var Base = /** @class */ (function () {
    function Base() {
        this.id = 1;
        this.name = "TV";
    }
    Base.prototype.Print = function () {
        console.log("id=" + this.id + "\n" + "name=" + this.name);
    };
    return Base;
}());
var Derived = /** @class */ (function () {
    function Derived() {
        this.price = 34500.55;
    }
    Derived.prototype.Print = function () {
        var obj = new Base();
        obj.Print();
        console.log("price=" + this.price);
    };
    return Derived;
}());
var obj = new Derived;
obj.Print();
