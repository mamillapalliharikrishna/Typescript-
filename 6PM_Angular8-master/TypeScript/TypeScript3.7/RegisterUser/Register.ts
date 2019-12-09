/// <reference path="ValidationRepository.ts" />
/// <reference path="Name.ts" />
/// <reference path="Mobile.ts" />

import { ValidateName, ValidateMobile } from "AngularValidations";

class  VerifyName implements ValidateName  {
    public NameValidator():void {
        console.log("Name 4 to 15 Chars Only");
    }
}
class VerfiyMobile implements ValidateMobile {
    public MobileValidator():void {
        console.log("Mobile +91 with 10 digits");
    }
}
let name = new VerifyName();
let mobile = new VerfiyMobile();
name.NameValidator();
mobile.MobileValidator();