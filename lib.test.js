const { test, expect } = require("@jest/globals");
const lib = require("./lib");

// avg 함수 테스트
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

// prime 함수 테스트
//소수일 때
test("prime(7) should return true", () => {
    expect(lib.prime(7)).toBe(true);
});
//소수가 아닐 때
test("prime(4) should return false", () => {
    expect(lib.prime(4)).toBe(false);
});

// factorial 함수 테스트
//일반적인 경우
test("factorial(5) should return 120", () => {
    expect(lib.factorial(5)).toBe(120);
});
//0인 경우
test("factorial(0) should return 1", () => {
    expect(lib.factorial(0)).toBe(1);
});

//범위 초과 경우
test("factorial(16) should return 범위 오류 (0~15)", () => {
    expect(lib.factorial(16)).toBe("범위 오류 (0~15)");
});
