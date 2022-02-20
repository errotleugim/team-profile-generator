const inquirer = require('inquirer')
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


function maketeam() {
    inquirer.prompt([{
        message: "What's the team called?"
        name: "teamname"
    },
    {
        type: "list"
        message: "select role"
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member id",
        name: "id"
    },
    {
        message: "Enter team member email address",
        name: "email"
    }])

   

}