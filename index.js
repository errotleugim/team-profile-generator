const inquirer = require('inquirer')
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



function maketeam() {
    inquirer.prompt([
    {
        message: "What's the member's name?",
        name: "name"
    },
    {
        message: "Enter team member id",
        name: "id"
    },
    {
        message: "Enter team member email address",
        name: "email"
    },
    {
        type: "list",
        message: "select role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    }
    ])
    .then(function({role}){
        switch(role) {
            case "Engineer":
                addEngineer();
                break;
            case "Manager":
                addManager();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateHTML();
        }
        }
    )
 }

function addEngineer(){
    inquirer.prompt ([
       {
           type: "input",
           name: "github",
           message: "What is the engineer's GitHub username?"
         }
    
       ])
}
function addManager(){
    inquirer.prompt ([
       {
           type: "input",
           name: "managerOfficeNumber",
           message: "What is the manager's office number?"
         }
    
       ])
}
 function addIntern(){
     inquirer.prompt ([
        {
            type: "input",
            name: "school",
            message: "Intern's school?"
          }
     
        ])
}

maketeam();