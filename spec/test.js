var sum = require("../all.js");
describe("MyFunction", function () {
    it("should be defined", function () {
        expect(sum).toBeDefined();
    });
    it("should be able to sum digits", function () {
        expect(sum(5,6)).toEqual(11);
    });
});
