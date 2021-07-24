const {verifyPassword, maxEight, notNull, upperCase, lowerCase, numbers, minimunConditions } = require('./password-verifier');

test('het maximun van 8', () => {
    let result = ("12345dddd")
    expect(maxEight(result)).toBe(false);
});
test('het maximun van 8', () => {
    let result = ("123")
    expect(maxEight(result)).toBe(true);
});

test('is niet nul', () => {
    let result = ("12345ddddd")
    expect(notNull(result)).toBe(true);
});

test('is niet nul', () => {
    let result = (null)
    expect(notNull(result)).toBe(false);
});

test('heeft 1 of meer hoofdletters', () => {
    let result = ('ggDDttt')
    expect(upperCase(result)).toBe(true);
});

test('heeft 1 of meer hoofdletters', () => {
    let result = ('ggddttt')
    expect(upperCase(result)).toBe(false);
});

test('heeft 1 of meer hoofdletters', () => {
    let result = ('200fHHH8')
    expect(upperCase(result)).toBe(true);
});

test('heeft 1 of meer kleine letters', () => {
    let result = ('ggDDttt')
    expect(lowerCase(result)).toBe(true);
});

test('heeft 1 of meer kleine letters', () => {
    let result = ('ggddttt')
    expect(lowerCase(result)).toBe(true);
});

test('heeft 1 of meer kleine letters', () => {
    let result = ('200HHHH8')
    expect(lowerCase(result)).toBe(false);
});

test('heeft 1 of meer cijfers', () => {
    let result = ('200HHHH8')
    expect(numbers(result)).toBe(true);
});

test('heeft 1 of meer cijfers', () => {
    let result = ('2HHHHhh')
    expect(numbers(result)).toBe(true);
});

test('heeft 1 of meer cijfers', () => {
    let result = ('HHHH')
    expect(numbers(result)).toBe(false);
});

test('heeft 1 of meer cijfers', () => {
    let result = ("12222222")
    expect(numbers(result)).toBe(true);
});



test('minimunConditions', () => {
    let conditions = [false, false, false, true, true]
    expect(minimunConditions(conditions)).toBe(false);
});

test('minimunConditions', () => {
    let conditions = [false, false, true, true, true]
    expect(minimunConditions(conditions)).toBe(true);
});

test('minimunConditions', () => {
    let conditions = [false, true, true, true, true]
    expect(minimunConditions(conditions)).toBe(true);
});

test('minimunConditions', () => {
    let conditions = [true, true, false, false, false]
    expect(minimunConditions(conditions)).toBe(false);
});
test('minimunConditions', () => {
    let conditions = [true, true, true, false, false]
    expect(minimunConditions(conditions)).toBe(true);
});


test('verifyPassword', () => {
    let result = null
    expect(verifyPassword(result)).toBe(false);
});

test('verifyPassword', () => {
    let result = ('w333000')
    expect(verifyPassword(result)).toBe(true);
});

test('verifyPassword', () => {
    let result = ('w3330W0')
    expect(verifyPassword(result)).toBe(true);
});

test('verifyPassword', () => {
    let result = ('4556DD')
    expect(verifyPassword(result)).toBe(false);
});