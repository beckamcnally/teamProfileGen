const Engineer = require('../lib/engineer')

// github
// user name
// role

//testing the whole precesses

  test('should create a github account', () => {

    const tempName = "githubUserName"
    const engineer = new Engineer("john", 45, "email@email.com", tempName);

    expect(engineer.github).toEqual(tempName);
  });

  
  test('should get role ', () => {

    const tempName = "Engineer"
    const engineer = new Engineer("john", 45, "email@email.com", "githubUserName");

    expect(engineer.getRole()).toEqual(tempName);
  });

  test('should getting a user name through github method', () => {

    const tempName = "githubUserName"
    const engineer = new Engineer("john", 45, "email@email.com", tempName);

    expect(engineer.getGithub()).toEqual(tempName);
  });
