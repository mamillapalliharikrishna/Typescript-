var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.Captcha = function () {
        var a = Math.random() * 10;
        var b = Math.random() * 10;
        var c = Math.random() * 10;
        var d = Math.random() * 10;
        var e = Math.random() * 10;
        var code = Math.round(a) + " " + Math.round(b) + " " + Math.round(c) + " " + Math.round(d) + " " + Math.round(e);
        return code;
    };
    Sample.prototype.PrintMessages = function () {
        console.log("line-1");
        console.log("line-2");
        console.log("line-3");
        return;
    };
    return Sample;
}());
var obj1 = new Sample();
console.log(obj1.Captcha());
console.log(obj1.Captcha());
console.log(obj1.Captcha());
obj1.PrintMessages();
