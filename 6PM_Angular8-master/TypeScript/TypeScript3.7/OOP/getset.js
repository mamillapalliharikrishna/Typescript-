var code = "admin1";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "FullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (code && code == "admin") {
                this._fullName = newName;
            }
            else {
                console.log("Not Allowed");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee();
emp.FullName = "David";
if (emp.FullName) {
    console.log(emp.FullName);
}
