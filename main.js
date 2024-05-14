// 5. Calculator project using function:
// .  Set up two variables containing number value.
// .  Set up a variables to hold an operator (+ o -).
// .  Create a function that takes two numbers and an operator as parameters, performs the corresponding operation, and returns the result.
// .  Call the function with the variables and operator, and output the result using console.lig.
// .  Update the operator vlue and call the function again with the update arguments.
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter first number",
    },
    {
        name: "secondNumber",
        tye: "number",
        message: "Enter second number",
    },
    {
        name: "operator",
        type: "list",
        message: "Select one of the operator to perform operation.",
        choices: ["Addition", "Subtraction"],
    },
]);
let { firstNumber, secondNumber, operator } = user;
function num(num1, num2, operation) {
    switch (operation) {
        case "Addition":
            return `The sum of ${num1} && ${num2} is ${num1 + num2}`;
            break;
        case "Subtraction":
            return `The sum of ${num1} && ${num2} is ${num1 - num2}`;
            break;
        default: {
            console.log("Please select a valid number");
        }
    }
    ;
}
;
let response = num(firstNumber, secondNumber, operator);
console.log(response);
