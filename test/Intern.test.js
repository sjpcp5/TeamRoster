const Intern = require("../lib/Intern");

//the key.school
test("Can set school via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
    // i expect this value toBe this value
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});