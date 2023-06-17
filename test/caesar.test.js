// Write your tests here!
const {expect} = require("chai")
const {caesar} = require("../src/caesar.js")
const {caesarHelper} = require("../src/caesar.js")

describe ("caesar()", () => {
    it ("should encode the message given a shift value", () => {
        const input = "im a genius"
        const shift = 6
        const actual = caesar(input, shift)
        const expected = "os g mktoay"
        expect(actual).to.equal(expected)
    })
    it ("should ignore capital letters when encoding the message", () => {
        const input = "Im A Genius"
        const shift = 6
        const actual = caesar(input, shift)
        const expected = "os g mktoay"
        expect(actual).to.equal(expected)
    })
    it ("should handle shifts at the end of the alphabet back to the beginning", () => {
        const input = "zezima"
        const shift = 3
        const actual = caesar(input, shift)
        const expected = "chclpd"
        expect(actual).to.equal(expected)
    })
    it ("should decode a message given a negative shift value", () => {
        const input = "fj x dbkfrp"
        const shift = -3
        const actual = caesar(input, shift, false)
        const expected = "im a genius"
        expect(actual).to.equal(expected)    
    })
    it ("should leave nonalphabetic symbols in the message, before and after encoding", () => {
        const input = "!try me!"
        const shift = -4
        const actual = caesar(input, shift, false)
        const expected = "!xvc qi!"
        expect(actual).to.equal(expected)
    })
    it ("should return false if the shift equals zero", () => {
        const shift = 0
        const input = "test"
        const actual= caesar(input, shift)
        expect(actual).to.be.false
    })
    it ("should return false if the shift value is more than 25", () => {
        const shift = 26
        const input = "test"
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })
    it ("should return false if the shift value is less than -25", () => {
        const shift = -26
        const input = "test"
        const actual = caesar(input, shift)
        expect(actual).to.be.false
    })
})
