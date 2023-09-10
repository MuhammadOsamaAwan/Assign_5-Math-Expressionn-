// chap 5 

// Q1
document.write ("<h2>Question2</h2>")
document.write("<br>")


var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log(result);

// Q2
document.write ("<h2>Question2</h2>")
document.write("<br>");

var subtract = num1 - num2
document.write("<br>");
document.write("subtarction of " + num1 + " and " + num2 + "is: " + subtract);
document.write("<br>");

var multiply = num1 * num2
document.write("<br>");
document.write("multiplication of " + num1 + " and " + num2 + "is: " + multiply);
document.write("<br>");

var divide = num1 / num2
document.write("<br>");
document.write("division of " + num1 + " and " + num2 + "is: " + divide);
document.write("<br>");

var modulus = num1 % num2
document.write("<br>");
document.write("modulus of " + num1 + " and " + num2 + "is: " + modulus);
document.write("<br>");
document.write("<br>");

// Q3
document.write ("<h2>Question3</h2>")
document.write("<br>");
// Q3a
let number;
// Q3b
document.write ("value after variable declaration is: " + number);
document.write("<br>");
// Q3c
number = 5;
// Q3d
document.write ("initial value " + number);
document.write("<br>");
// Q3e
number ++;
// Q3f
document.write ("value after increment is: " + number);
document.write("<br>");
// Q3g
number =+ 7;
// Q3h
document.write ("value after addition is: " + number);
document.write("<br>");
// Q3i
number --;
// Q3j
document.write ("value after decrement is: " + number);
document.write("<br>");
// Q3k
let reminder = number%3;
// Q3l
document.write ("The reminder is: " + reminder);
document.write("<br>");

// Q4
let ticket_price = 1000;
let total_ticket = 10;
let total_cost = ticket_price*total_ticket
document.write("Total cost of buy" , total_ticket , "Ticket of a Movie is:" , total_cost);
document.write("<br>");

// Q5
document.write ("<h2>Question5</h2>")
document.write("<br>");

let tableNumber = 10;
let multiplyNumber = 1;
let val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");
++multiplyNumber;
val1 = tableNumber*multiplyNumber;
document.write (tableNumber, "X" , multiplyNumber, "=", val1);
document.write("<br>");

// Q6
document.write ("<h2>Question6</h2>")
document.write("<br>");
// Q6a
let celcius = 25;
// Q6b
let cToF = (celcius * 9 / 5) + 32;
document.write (celcius, "&degC" , "is", cToF , "&degF");
document.write("<br>");
// Q6c
let fahrenheight = 70;
// Q6d
let fToC = (fahrenheight -32) * 5/9;
document.write (fahrenheight, "&degC" , "is", fToC , "&degF");
document.write("<br>");
document.write("<br>");

// Q7
document.write ("<h2>Question7</h2>")
document.write("<br>");
// Q7a
document.write ("<h2> Shopping cart </h2>")
document.write("<br>");
var priceitem1 = 800;
document.write ("price of item is:" , priceitem1);
document.write("<br>");
// Q7b
var quantityItem1 = 7;
document.write ("Quantity of item is:" , quantityItem1);
document.write("<br>");
// Q7c
var priceItem2 = 5;
document.write ("price of item is:" , priceItem2);
document.write("<br>");
// Q7d
var quantityItem2 = 5;
document.write ("Quantity of item is:" , quantityItem2);
document.write("<br>");
// Q7e
var shippingCharges = 200;
document.write ("shipping charges of item is:" , shippingCharges);
document.write("<br>");
var totalCartCost = (priceitem1*quantityItem1) + (priceItem2*quantityItem2) + shippingCharges
document.write ("Total cost of your order is:" , totalCartCost);
document.write("<br>");

// Q8
document.write ("<h2> Question8 </h2>")
document.write("<br>");

document.write ("<h2> Mark Sheet </h2>")
document.write("<br>");

let totalMarks = 1400;
document.write ("Total Marks:" , totalMarks);
document.write("<br>");

let marksObtain = 970;
document.write ("Marks obtain:" , marksObtain);
document.write("<br>");

let percentage = marksObtain/totalMarks * 100;
document.write ("percentage:" , percentage);
document.write("<br>");

// Q9
document.write ("<h2> Question9 </h2>")
document.write("<br>");


document.write ("<h2> Currency in PKR </h2>")
document.write("<br>")
let AED = 700;
let DOLL = 130;
let totalCurrencyPKR = (AED*78.80) + (DOLL*305);
document.write("<br>");
document.write("Total currency in PKR:" ,totalCurrencyPKR);
document.write("<br>");

// Q10
document.write ("<h2> Question10 </h2>")
document.write("<br>");
let someNumber = 10;
let calculation = [(someNumber + 5)*10]/2;
// console.log (calculation);
document.write("Total Calculation is:" , calculation);
document.write("<br>");

// Q11
document.write ("<h2> Question11 </h2>")
document.write("<br>");


document.write ("<h2> Age Calculator </h2>")
document.write("<br>");

// Q11a
var currentYear = 2023;
document.write("Current Year:" , currentYear);
document.write("<br>");

// Q11b
var birthYear = 1993;
document.write("Birth Year:" , birthYear);
document.write("<br>");

// Q11c
var age = currentYear - birthYear;
console.log(age);
document.write("your age is:" ,age);
document.write("<br>");

// Q12
document.write ("<h2> Question12 </h2>")
document.write("<br>");

document.write ("<h2> The Geomatric </h2>")
document.write("<br>");

// Q12a
let radius = 20;
document.write ("Radius of a cricle is" , radius);
document.write("<br>");

// Q12b
let pies = 3.143;
let circumferences = 2*pies*radius;
document.write ("This circumferences is" , circumferences);
document.write("<br>");

// Q12c
let area = pies*radius**2;
document.write ("This area: is" , area);
document.write("<br>");

// Q13
document.write ("<h2> Question13 </h2>")
document.write("<br>");

document.write ("<h2> The Life time supply calculator </h2>")
document.write("<br>");

// Q13a
var favouriteSnakes = "Rite";
document.write ("Fravourite snakes" , favouriteSnakes);
document.write("<br>");

// Q13b
var currentAge = 32;
document.write ("Current age" , currentAge);
document.write("<br>");

// Q13c
var maxAge = 55;
document.write ("Max age" , maxAge);
document.write("<br>");

// Q13d
var snakesPerDay = 3;
document.write ("Amount of snakes per day" , snakesPerDay);
document.write("<br>");

// Q13e
var totalEat = (maxAge - currentAge)*snakesPerDay;
document.write ("You will eat" , totalEat, " ", favouriteSnakes, " to last you until ripe");
document.write("<br>");
