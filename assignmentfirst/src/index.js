//String
var first_name = "Masai";
// Number
var age = 15;
// Boolean
var isFetching = true;
//Array of Number;
var arr = [1, 2, 3, 4];
// Array of String
var str = ["masai", "school"];
// tuple
var x;
x = ["masai", true];
// enum
var Masai;
(function (Masai) {
    Masai[Masai["User"] = 0] = "User";
    Masai[Masai["SuperUser"] = 1] = "SuperUser";
    Masai[Masai["Admin"] = 2] = "Admin";
    Masai[Masai["SuperAdmin"] = 3] = "SuperAdmin";
})(Masai || (Masai = {}));
// function
function Product(x, y) {
    return x * y;
}
Product(4, 5);
function Div(x, y) {
    return x / y;
}
Div(4, 5);
function PrintName(Query) {
    console.log(Query);
}
PrintName("Masai");
