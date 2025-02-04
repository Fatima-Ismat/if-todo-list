#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Ismat Fatima's To Do list\n");
let myLoop = true;
let todoListArray = [];
while (myLoop) {
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "todoItem",
            message: "Enter item in you To Do list!",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more items?",
            default: false,
        },
        {
            type: "confirm",
            name: "seeList",
            message: "Do you want to see the list?",
            default: false,
            when(userInput) {
                return userInput.addMore === false;
            },
        },
    ]);
    const { todoItem, addMore, seeList } = userInput;
    if (todoItem) {
        todoListArray.push(todoItem);
    }
    if (seeList) {
        console.log(`\nHere is your To Do List:`);
        todoListArray.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    myLoop = addMore;
}
