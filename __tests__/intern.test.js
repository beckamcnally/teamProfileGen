const Intern = require('../lib/intern')

test('should create a github account', () => {

  const tempName = "Carle"
  const intern = new Intern("john", 45, "email@email.com", tempName);

  expect(intern.school).toEqual(tempName);
});

test('should get role ', () => {

  const tempName = "Intern"
  const intern = new Intern("john", 45, "email@email.com", "Carle");

  expect(intern.getRole()).toEqual(tempName);
});

test('should get school name through school method', () => {

  const tempName = "Carle"
  const intern = new Intern("john", 45, "email@email.com", tempName);

  expect(intern.getSchool()).toEqual(tempName);
});

