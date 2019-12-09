/// <reference path="ValidationRepository.ts" />

import { IMobile } from "AngularValidations";

declare module "AngularValidations" {
  export class ValidateMobile implements IMobile {
      MobileValidator():void;
  }
}