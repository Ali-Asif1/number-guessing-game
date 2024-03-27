#! /usr/bin/env node

import inquirer from "inquirer";

let generateNumber = Math.floor(Math.random() * 10 + 1);
let userNumber = await inquirer.prompt([
  { type: "number", name: "userNum", message: "Guess the number b/w 1 to 10:" },
]);
if (userNumber.userNum == generateNumber) {
  console.log("your guess is right");
} else {
  console.log("Sorry, your guess is wrong");
}
