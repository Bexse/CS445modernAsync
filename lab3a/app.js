/*
 * app.ts
 */
var calcAverage = function (a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return ("The Average of [" + a + "] is " + (sum / a.length).toFixed(2));
};
var a = [17, 9, 4, 82, 15, 36];
var b = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
var result =  calcAverage(a);
var result2 = calcAverage(b);
console.log(result);
console.log(result2);
//enum Numeric Type
//Given below is a set of declarations and 
//initialization of constants for Tax rates used in a Payroll application.
var FICA = 10, STATE = 5, MEDICARE = 12;
var Taxrates;
(function (Taxrates) {
    Taxrates[Taxrates["FICA"] = 10] = "FICA";
    Taxrates[Taxrates["STATE"] = 5] = "STATE";
    Taxrates[Taxrates["MEDICARE"] = 12] = "MEDICARE";
})(Taxrates || (Taxrates = {}));
;
