// testing suite

const enhancer = require('./enhancer');

describe('enhancer library', () => {
  describe('repair() method', () => {
    // arrange
    const item = {
      durability: 50,
    };
    test('it should set durability to 100', () => {
      expect(enhancer.repair(item)).toEqual({ durability: 100 });
    })
    test('it should not change any other values', () => {
      const item = {
        name: 'test item',
        enhancement: 5,
        durability: 5,
      };
      const expected = {
        name: 'test item',
        enhancement: 5,
        durability: 100,
      }
      expect(enhancer.repair(item)).toEqual(expected);
    })
  })
  describe('fail() method', () => {
    // arrange
    it('should decrease the durability by 5 if enhancement is between 0 and 14', () => {
      const item = {
        durability: 50,
        enhancement: 10,
      };
      const expected = {
        durability: 45,
        enhancement: 10,
      };

    // act
      const actual = enhancer.fail(item);

    // assert
    expect(actual).toEqual(expected);
    })
    it('should decrease the durability by 10 if enhancement is greater than 14', () => {
      const item = {
        durability: 50,
        enhancement: 15,
      };
      const expected = {
        durability: 40,
        enhancement: 15,
      };

    // act
      const actual = enhancer.fail(item);

    // assert
    expect(actual).toEqual(expected);
  })
})
})
