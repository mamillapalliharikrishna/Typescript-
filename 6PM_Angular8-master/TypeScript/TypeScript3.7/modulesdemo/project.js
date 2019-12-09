"use strict";
/// <reference path="Repository.ts" />
/// <reference path="TeamA.ts" />
/// <reference path="TeamB.ts" />
exports.__esModule = true;
var ClassForTeamA = /** @class */ (function () {
    function ClassForTeamA() {
    }
    ClassForTeamA.prototype.Print = function () {
        console.log("Team A Class");
    };
    return ClassForTeamA;
}());
var ClassForTeamB = /** @class */ (function () {
    function ClassForTeamB() {
    }
    ClassForTeamB.prototype.Print = function () {
        console.log("Team B Class");
    };
    return ClassForTeamB;
}());
var obj1 = new ClassForTeamA();
var obj2 = new ClassForTeamB();
obj1.Print();
obj2.Print();
