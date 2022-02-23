const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it("Sets GitHub user from constructor function", () => {
        const github = "github/1337h4x0r"
        const engineer = new Engineer('Rambo', 666, 'john@rambo.com', github);
        expect(engineer.github).toBe(github);
    });

    it("getRole() should return \"Engineer\"", () => {
        const testing = "Engineer";
        const engineer = new Engineer('Rambo', 666, 'john@rambo.com', "github/1337h4x0r");
        expect(engineer.getRole()).toBe(testing);
      });
      

    it("getGitHub returns the GitHub account", () => {
        const testing = "github/1337h4x0r";
        const engineer = new Engineer("Rambo", 666, 'john@rambo.com', testing);
        expect(engineer.getGithub()).toBe(testing);
    });
})