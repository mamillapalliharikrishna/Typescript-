/// <reference path="Repository.ts" />
/// <reference path="TeamA.ts" />
/// <reference path="TeamB.ts" />

import { TeamAClass, TeamBClass } from "ProjectA";

class ClassForTeamA implements TeamAClass {
    public Print() {
        console.log("Team A Class");
    }
}
class ClassForTeamB implements TeamBClass {
    public Print() {
        console.log("Team B Class");
    }
}

let obj1 = new ClassForTeamA();
let obj2 = new ClassForTeamB();
obj1.Print();
obj2.Print();