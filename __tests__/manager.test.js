const Manager = require("../lib/manager")


test('should get role ', () => {

  const tempName = "Manager"
  const manager = new Manager("john", 45, "email@email.com", 10);

  expect(manager.getRole()).toEqual(tempName);
});

test('should get office number through office number method', () => {

  const tempName = 10
  const manager = new Manager("john", 45, "email@email.com", tempName);

  expect(manager.getOfficeNumber()).toEqual(tempName);
});