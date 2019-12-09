var Project;
(function (Project) {
    var TeamA;
    (function (TeamA) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.Print = function () {
                console.log("Team-A Class1");
            };
            return Class1;
        }());
        TeamA.Class1 = Class1;
    })(TeamA = Project.TeamA || (Project.TeamA = {}));
})(Project || (Project = {}));
var Project;
(function (Project) {
    var TeamB;
    (function (TeamB) {
        var Class1 = /** @class */ (function () {
            function Class1() {
            }
            Class1.prototype.Print = function () {
                console.log("Team-B Class1");
            };
            return Class1;
        }());
        TeamB.Class1 = Class1;
    })(TeamB = Project.TeamB || (Project.TeamB = {}));
})(Project || (Project = {}));
/// <reference path="TeamA.ts" />
/// <reference path="TeamB.ts" />
var TA = Project.TeamA;
var TB = Project.TeamB;
var obj1 = new TA.Class1();
var obj2 = new TB.Class1();
obj1.Print();
obj2.Print();
