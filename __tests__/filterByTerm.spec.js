// require('../src/filterByTerm.js');
// import('../src/filterByTerm.js');
const filterByTerm = require("../src/filterByTerm");
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];
        const output = [{ id: 3, url: "https://www.link3.dev" }];
        expect(filterByTerm(input,"link")).toEqual(output);
    });
    test("result is empty array if nothing matches", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];
        const output = [];
        expect(filterByTerm(input,"notexistent")).toEqual(output);
    });
    test("result is empty if input array is empty", () => {
        const input = [];
        const output = [];
        expect(filterByTerm(input,"notexistent")).toEqual(output);
    });
    test("it should filter by a search term (url)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
          ];
        const output = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
        ];
        expect(filterByTerm(input,"url")).toEqual(output);
    });
});
