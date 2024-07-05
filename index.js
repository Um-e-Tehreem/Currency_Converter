#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//define the list of currencies and their exchange rates
console.log(chalk.blue.bold("\n\tWellcome to 'Ume Tehreem' Currency Converter"));
let exchange_rate = {
    "USD": 1,
    "CAD": 1.3,
    "EUR": 0.9,
    "JYP": 113,
    "AUD": 1.65,
    "PKR": 277.70
};
let userAns = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.greenBright("Select the currency to convert from:"),
        choices: ["USD", "CAD", "EUR", "JYP", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.green("Select the currency to convert into"),
        choices: ["USD", "CAD", "EUR", "JYP", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("Enter the amount to convert:")
    }
]);
let from_amount = exchange_rate[userAns.from_currency];
let to_amount = exchange_rate[userAns.to_currency];
let amount = userAns.amount;
//formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted amount = ${chalk.magenta(converted_amount.toFixed(2))}`);
