const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Sets office from constructor function", () => {
        const officenumber = 41
        const manager = new Manager('Rambo', 666, 'john@rambo.com', officenumber);
        expect(manager.officenumber).toBe(officenumber);
    });

    it("getRole() should return \"Manager\"", () => {
        const testing = "Manager";
        const manager = new Manager('Rambo', 666, 'john@rambo.com', 55);
        expect(manager.getRole()).toBe(testing);
      });
      

    it("getOffice returns officenumber", () => {
        const testing = 66;
        const manager = new Manager("Rambo", 666, 'john@rambo.com', testing);
        expect(manager.getofficenumber()).toBe(testing);
    });
})