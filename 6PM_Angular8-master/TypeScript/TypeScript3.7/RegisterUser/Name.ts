/// <reference path="ValidationRepository.ts" />

import { IName } from "AngularValidations";
declare module "AngularValidations" {
    export class ValidateName implements IName {
        NameValidator():void;
    }
}