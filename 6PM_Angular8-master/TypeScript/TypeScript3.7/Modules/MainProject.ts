/// <reference path="TeamA.ts" />
/// <reference path="TeamB.ts" />

let TA = Project.TeamA;
let TB = Project.TeamB;

let obj1 = new TA.Class1();
let obj2 = new TB.Class1();

obj1.Print();
obj2.Print();
