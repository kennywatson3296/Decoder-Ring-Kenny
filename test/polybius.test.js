const {expect} = require("chai")
const {polybius} = require("../src/polybius.js")

describe ("polybius", () =>{
    it ("should encode both i and j to 42", () => {
        const input = "jimmy"
        const actual = polybius(input)
        const expected = "4242232345"
        expect(actual).to.equal(expected)
    })
    it ("when decoding should translate 42 to (i/j)", () => {
        const input = "4242232345"
        const actual = polybius(input, false)
        const expected = "(i/j)(i/j)mmy"
        expect(actual).to.equal(expected)
    })
    it ("should ignore capital letters", () => {
        const input = "Jimmy Neutron"
        const actual = polybius(input)
        const expected = "4242232345 33515444244333"
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces before and after when encoding", () => {
        const input = " jimmy "
        const actual = polybius(input)
        const expected = " 4242232345 "
        expect(actual).to.equal(expected)
    })
    it ("should maintain spaces before and after decoding", () => {
        const input = " 4242232345 33515444244333 "
        const actual = polybius(input, false)
        const expected = " (i/j)(i/j)mmy neutron "
        expect(actual).to.equal(expected)
    })

})
