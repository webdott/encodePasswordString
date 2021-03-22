/*
 The encoding algorithm replaces every character in the string with the letter 
 that has exactly the same position when counting backwards from letter “z” 
 with alphabet sort order in mind). Non-alphabet characters are ignored.
*/

const encodePassword = require('./encode');

test('testing "a" to be "z"', () => {
    expect(encodePassword('a')).toBe('z');
});

test('testing "c" to be "x"', () => {
    expect(encodePassword('c')).toBe('x');
});

test('testing "p" to be "k"', () => {
    expect(encodePassword('p')).toBe('k');
});

test('testing "hello" to be "svool"', () => {
    expect(encodePassword('hello')).toBe('svool');
});

test('testing "@Nwafor1" to be "@Mdzuli1" for capital letters and non-alphabetic characters', () => {
    expect(encodePassword('@Nwafor1')).toBe('@Mdzuli1');
})