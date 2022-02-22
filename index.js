const inquirer = require('inquirer')
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

teamArray = []

function addmembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add more members?",
            choices: ["Yes", "No"],
            name: "members"
        }
    ])
    .then(function(userinput){
        switch(userinput.members) {
            case "Yes":
                maketeam();
                break;
            case "No":
                console.log("Team done");
                break;
        }
    
    })
}
function maketeam() {
    inquirer.prompt([
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
           type: "input",
           name: "github",
           message: "What is the engineer's GitHub username?"
        }
         
         ])
         .then(answers => {
             const engineer = new Engineer(answers.github, answers.email, answers.name, answers.id);
             teamArray.push(engineer)
             console.log(teamArray)
             addmembers();
         })
}
function addManager(){
    inquirer.prompt ([
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
           type: "input",
           name: "officenumber",
           message: "What is the manager's office number?"
         }
    
       ])
       .then(answers => {
           const manager = new Manager(answers.email, answers.name, answers.id, answers.officenumber);
           teamArray.push(manager);
           console.log(teamArray);
           addmembers();
       })
}
 function addIntern(){
     inquirer.prompt ([
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
            type: "input",
            name: "school",
            message: "Intern's school?"
          }
     
        ])
        .then(answers => {
            const intern = new Intern(answers.email, answers.name, answers.id, answers.school);
            teamArray.push(intern);
            console.log(teamArray);
            addmembers();
        })
        
    }

maketeam();