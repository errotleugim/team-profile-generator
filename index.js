const inquirer = require('inquirer')
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamcreate = require("./src/template.js")

teamArray = []

function finishTeam() {
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
                finishHtml(teamArray);
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
            //  console.log(teamArray)
             finishTeam();
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
           finishTeam();
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
            finishTeam();
        })
        
    }


    const generateHTML = function (objects) {   
        return`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        </head>
        <body>
            <header>
                <nav class="navbar" id="navbar">
                    <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
                </nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        <!--Object Divs-->
                        ${objects}
                    </div>
                </div>
            </main>
            
        </body>
           </html>
        `
    }

    function finishHtml(objects) {   
        // fs.appendFile("./output/team.html", generateHTML(objects), function (err) {
        //     if (err) {
        //         console.log(err);
        //     };
        // });
        // console.log("end");
        console.log(objects);
    }

maketeam();
