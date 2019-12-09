var errors;
(function (errors) {
    errors[errors["OK"] = 200] = "OK";
    errors[errors["Method"] = 302] = "Method";
    errors[errors["NotFound"] = 404] = "NotFound";
})(errors || (errors = {}));
;
var ErrorCodes;
console.log("Not Found Code =" + errors.NotFound);
