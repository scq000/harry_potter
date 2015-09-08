'use strict';

var BasketItem = require('../src/basket-item');
var Book = require('../src/book');

describe('BasketItem', function () {

    it('should have two property called book and count', function () {
        var basketItem = new BasketItem('A',3);
        var book = new Book('A');

        expect(basketItem.book).toEqual(book);
        expect(basketItem.count).toBe(3);
    });
});