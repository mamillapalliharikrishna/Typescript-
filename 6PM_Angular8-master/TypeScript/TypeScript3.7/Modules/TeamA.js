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
