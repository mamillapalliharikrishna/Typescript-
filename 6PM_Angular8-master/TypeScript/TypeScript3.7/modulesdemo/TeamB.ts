/// <reference path="Repository.ts" />
import { TeamB } from "ProjectA";

declare module "ProjectA" {
    export class TeamBClass implements TeamB {
        public Print():void;
    }
}
