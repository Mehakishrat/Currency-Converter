import inquirer from "inquirer";
import chalk from "chalk";
// Print welcome message
console.log(chalk.blue.bold("Welcome to \'Mehak Ishrat\' - Currency Converter"));
// create variable and describe currency exchange rate 
let exchange_Rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9,
    "GBP": 0.77,
    "JYP": 157,
    "CAD": 1.3,
    "AUD": 1.48,
    "AED": 3.67,
    "INR": 83.57,
    "PKR": 278.44
};
// asking the user to select currency to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.yellow("\n Select the currency to convert from:\n"),
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "AED", "INR", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("\n Select the currency to convert into:\n"),
        choices: ["USD", "EUR", "GBP", "JYP", "CAD", "AUD", "AED", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow("\nEnter the amount to convert:\n")
    }
]);
// perform currency conversion by using formula
let from_account = exchange_Rate[user_answer.from_currency];
let to_account = exchange_Rate[user_answer.to_currency];
let amounts = user_answer.amount;
// Formula of conversion
let base_amount = amounts / from_account;
let converted_amount = base_amount * to_account;
// Display the converted amount
console.log(chalk.blueBright(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`));
