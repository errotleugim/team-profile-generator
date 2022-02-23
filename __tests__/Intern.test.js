const Intern = require('../lib/Intern');

describe("Intern", () => {
    it("Sets school from constructor function", () => {
        const school = 'Rock & Roll High School'
        const intern = new Intern('Rambo', 666, 'john@rambo.com', school);
        expect(intern.school).toBe(school);
    });

    it("getRole() should return \"Intern\"", () => {
        const testing = "Intern";
        const intern = new Intern('Rambo', 666, 'john@rambo.com', 'Rock & Roll High School');
        expect(intern.getRole()).toBe(testing);
      });
      

    it("getSchool returns the school", () => {
        const testing = "Rock & Roll High School";
        const intern = new Intern("Rambo", 666, 'john@rambo.com', testing);
        expect(intern.getSchool()).toBe(testing);
    });
})