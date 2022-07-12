//String
let first_name: string = "Masai";

// Number

let age: number = 15;

// Boolean

let isFetching: Boolean = true;

//Array of Number;

let arr: number[] = [1, 2, 3, 4];
// Array of String
let str: string[] = ["masai", "school"];

// tuple
let x: [string, boolean];
x = ["masai", true];

// enum
enum Masai {
  User,
  SuperUser,
  Admin,
  SuperAdmin,
}


// function
function Product(x:number,y:number):number{
  return x*y;
}
Product(4,5)

function Div(x:number,y:number):number{
  return x/y;
}
Div(4,5)


function PrintName(Query:string){
  console.log(Query);
  
}
PrintName("Masai")