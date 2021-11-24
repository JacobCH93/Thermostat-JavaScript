const sayHello = require('./sayHello');
describe('sayHello', () => {
    it('says Hello', () => {
        expect(sayHello()).toEqual('Hello');
      });
  });