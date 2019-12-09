var Arrow = /** @class */ (function () {
    function Arrow() {
        this.Add = function (a, b) { return a + b; };
        this.Hello = function (uname) { return "Hello !" + uname; };
    }
    return Arrow;
}());
var obj = new Arrow();
console.log(obj.Add(10, 20));
console.log(obj.Hello("John"));
