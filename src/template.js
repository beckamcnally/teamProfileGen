const generateTeam = team => {

  const generagteManager = manager => {
    return `
  <div class="card" style="width: 18rem;">
      <div class="card-header">
        Manager
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Name:${manager.getName()}</li>
          <li class="list-group-item">Employee Id:${manager.getID()}</li>
          <li class="list-group-item"><a href="mailto:">Email:${manager.getEmail()}</a>li>
          <li class="list-group-item">Office Number:${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  `
  }

  const html = [];

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );
  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );

  return html.join("");

  //how will the html generate a card for each one?? maybe have a function genCards that generates the cards and then stick that inside of the template literal in the card containers. 
  // 

}


module.exports = team => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <title>Team Employee Profiles</title>
</head>
<body>
  <header class="bg-primary">
      <h1>My Team</h1>
  </header>
  <main>
    ${generateTeam(team)}
      </div>
  </main>
</body>
</html>`
}