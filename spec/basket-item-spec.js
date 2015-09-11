'use strict';

var BasketItem = require('../src/basket-item');
var Book = require('../src/book');

describe('BasketItem', function () {

    it('should have two property called book and count', function () {
        var basketItem = new BasketItem('A', 3);//BasketItem初始化book，从测试上看尤其怪
        /**
         * 这里这样会更合理
         * var basketItem = new BasketItem(new Book('A'), 3);
         * var book = new Book('A');
         */
        var book = new Book('A');

        expect(basketItem.book).toEqual(book);
        expect(basketItem.count).toBe(3);
    });
});