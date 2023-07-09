const {timeParser, resolutionParser, coordinatesParser} = require('../Parser');


describe('test all three parsers', () => {
    // should return '20.0'
    it('should remove the unit', () => {
        expect(timeParser('20.0 s')).toBe('20.0')
    })
    // should return [20, 30]
    it('should return the length and width', () => {
        expect(resolutionParser('20x30')).toEqual([20,30])
    })
    // should return [1,2]
    it('should return the X and Y', () => {
        expect(coordinatesParser('1,2')).toEqual([1,2])
    })
})

