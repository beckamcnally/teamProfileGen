// do i need to require anything for these tests?? 

//https://jestjs.io/docs/api#describename-fn

// describe('what ever you type here is going to show as what you are testing in your console', () => {
//     test('human readable what is the test', () => {
        // declare variables to use in the test
//       expect(what is the expected input).toBeTruthy(output)or equalTo();
//     });
//   });
//testing the whole prcesses
describe('Engineer', () => {
  describe('initializeEngineer', () => {
    test('should create an object with a github if provided valid arguments');

    const engineer = new Engineer("github");

    expect(engineer.name).toEqual('github');
  
  })

  test('should though an error if not provided any arguments', () => {
    const cb = () => new Engineer();
    expect(cb).toThrow();
  });


  test("should throw an error if 'github' is not a string", () => {
    const cb = () => new Engineer('github');
    const err = new Error("Expected parameter 'github' to be a non-empty string");

    expect(cb).toThrow(err);
  });

  describe("addEngineer", () => {
  test("should add an Engineer to the 'Engineer' array", () => {
    const engineer = new Engineer('github')
    engineer.addEngineer(employee)

    expect(engineer.engineerList.length).toEqual(1);

    });

  });
});