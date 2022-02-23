const genManager = require("./generateManager")
const genEngineer = require("./generateEngineer")
const genIntern = require("./generateIntern")

generateHTML = (data) => {
      pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = genManager(employee);
            pageArray.push(managerCard);
        }
   
        if (role === 'Engineer') {
            const engineerCard = genEngineer(employee);
            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = genIntern(employee);
            pageArray.push(internCard);
        }
    }
    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {   
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
  <body class="bg-dark">
      <header>
          <nav class="navbar" id="navbar">
          <h1 class="text-light mb-0 h1 w-100 text-center">Team Profile</h1>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center">
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  
  </html>


`;
}


module.exports = generateHTML; 
