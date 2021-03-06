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
    });
    test('it should not change any other values', () => {
      const item = {
        baseName: 'test item',
        enhancement: 5,
        durability: 5,
      };
      const expected = {
        baseName: 'test item',
        enhancement: 5,
        durability: 100,
      };
      expect(enhancer.repair(item)).toEqual(expected);
    });
  });
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
      expect(actual.durability).toEqual(expected.durability);
    });
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
      expect(actual.durability).toEqual(expected.durability);
    });
    it('should decrease enchantment level by 1 if enchantment level is greater than 16', () => {
      // arrange
      const item = {
        durability: 50,
        enhancement: 18,
      };
      const expected = {
        durability: 40,
        enhancement: 17,
      };

      // act
      const actual = enhancer.fail(item);

      // assert
      expect(actual.enchantment).toBe(expected.enchantment);
    });
    it('should update the name to reflect new enhancement', () => {
      const item = {
        baseName: 'sword of swordiness',
        name: '[TRI] sword of swordiness',
        prefix: '[TRI]',
        enhancement: 18,
        durability: 70,
      };
      const expected = {
        baseName: 'sword of swordiness',
        name: '[DUO] sword of swordiness',
        prefix: '[DUO] ',
        enhancement: 17,
        durability: 60,
      };
      const actual = enhancer.fail(item);
      expect(actual).toEqual(expected);
    });
    });
  describe('sucess() method', () => {
    it('should increase the enhancement level by 1', () => {
      const item = {
        enhancement: 18,
      };
      const expected = {
        enhancement: 19,
      };
      const actual = enhancer.success(item);
      expect(actual.enhancement).toBe(expected.enhancement);
    });
    it('should not increase the enchantment above 20', () => {
      const item = {
        enhancement: 20
      };
      const expected = {
        enhancement: 20
      };
      const actual = enhancer.success(item);
      expect(actual.enhancement).toBe(expected.enhancement);
    })
    it('should update the name to reflect new enhancement', () => {
      const item = {
        baseName: 'sword of swordiness',
        name: '[TRI] sword of swordiness',
        prefix: '[TRI]',
        enhancement: 18,
        durability: 70,
      };
      const expected = {
        baseName: 'sword of swordiness',
        name: '[TET] sword of swordiness',
        prefix: '[TET] ',
        enhancement: 19,
        durability: 70,
      };
      const actual = enhancer.success(item);
      expect(actual).toEqual(expected);
    })
  })
  });
