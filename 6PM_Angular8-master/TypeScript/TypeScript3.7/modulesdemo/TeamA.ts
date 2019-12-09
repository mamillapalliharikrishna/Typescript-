/// <reference path="Repository.ts" />
import { TeamA } from "ProjectA";

declare module "ProjectA" {
    export class TeamAClass implements TeamA {
        Print():void;
     }
}
