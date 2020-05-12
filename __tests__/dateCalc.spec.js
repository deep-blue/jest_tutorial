// do some calculations with dates to understand Date
describe('Date testing', () => {
    test('date should convert back and forth', () => {
        const year = 2020;
        const month =5; // June
        const day = 5;
        const start = new Date(year, month, day);
        expect(start.getDay()).toEqual(day);
        expect(start.getMonth()).toEqual(month);
        expect(start.getFullYear()).toEqual(year);
    });
    test('dates can be defined several ways', () => {
        const year = 2020;
        const month =5; // June
        const day = 5;
        const start = new Date(year, month, day);
        const start2 = new Date(year, month-1, day+31); // may has 31 days
        expect(start.getDay()).toEqual(start2.getDay());
        expect(start.getMonth()).toEqual(start2.getMonth());
        expect(start.getFullYear()).toEqual(start2.getFullYear());
    });
})