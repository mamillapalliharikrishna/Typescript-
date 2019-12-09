"use strict";
/// <reference path="ValidationRepository.ts" />
/// <reference path="Name.ts" />
/// <reference path="Mobile.ts" />
exports.__esModule = true;
var VerifyName = /** @class */ (function () {
    function VerifyName() {
    }
    VerifyName.prototype.NameValidator = function () {
        console.log("Name 4 to 15 Chars Only");
    };
    return VerifyName;
}());
var VerfiyMobile = /** @class */ (function () {
    function VerfiyMobile() {
    }
    VerfiyMobile.prototype.MobileValidator = function () {
        console.log("Mobile +91 with 10 digits");
    };
    return VerfiyMobile;
}());
var name = new VerifyName();
var mobile = new VerfiyMobile();
name.NameValidator();
mobile.MobileValidator();
