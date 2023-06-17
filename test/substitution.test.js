const {expect} = require("chai")
const {substitution} = require("../src/substitution.js")

describe ("substitution", () => {
    it ("should return false if the alphabet isn't exactly 26 characters", () => {
        const alphabet = "bank"
        const input = "test"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it ("should return false if the alphabet isn't consistent of unique characters", () => {
        const alphabet = "ababababababababababababab"
        const input = "test"
        const actual = substitution(input, alphabet)
        expect(actual).to.be.false
    })
    it ("should translate the message, given the alphabet given to the function", () => {
        const alphabet = "!andimlocker@$nqzbv.'phg91" 
        const input = "test me"
        const actual = substitution(input, alphabet)
        const expected = ".iv. @i"
        expect(actual).to.equal(expected)
    })
    it ("should ignore capital letters when encoding", () => {
        const alphabet = "!andimlocker@$nqzbv.'phg91"
        const input = "Test Me"
        const actual = substitution(input, alphabet)
        const expected = ".iv. @i"
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces before and after encoding", () => {
        const alphabet = "!andimlocker@$nqzbv.'phg91"
        const input = " test me "
        const actual = substitution(input, alphabet)
        const expected = " .iv. @i "
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces before and after decoding", () => {
        const alphabet = "!andimlocker@$nqzbv.'phg91"
        const input = " .iv. @i "
        const actual = substitution(input, alphabet, false)
        const expected = " test me "
        expect(actual).to.equal(expected)
    })
})
