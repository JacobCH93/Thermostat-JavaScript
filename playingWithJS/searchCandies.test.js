const searchCandies = require('./candiesArray');

describe('candiesArray', () => {
  it('searches cadies by prefix and price', () => {
    expect(searchCandies('Ma', 4)).toEqual(['Maltesers', 'Mars']);
  });
  it('searches cadies by prefix and price', () => {
    expect(searchCandies('Sk', 4)).toEqual(['Skitties', 'Skittles']);
  });
  it('searches cadies by prefix and price', () => {
    expect(searchCandies('A', 2)).toEqual(['Aero']);
  });
});