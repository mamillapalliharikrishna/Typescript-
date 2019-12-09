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
