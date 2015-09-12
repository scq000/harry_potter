'use strict';

var Basket = require('../src/basket');
var BasketItem = require('../src/basket-item');
var Book = require('../src/book');

var _ = require('lodash');

describe('Basket', function () {

    var basket;
    var a, b, c, d, e;

    beforeEach(function () {
        basket = new Basket();
        a = new Book('A');
        b = new Book('B');
        c = new Book('C');
        d = new Book('D');
        e = new Book('E');
        basket.basketItems = [new BasketItem(a, 1),
            new BasketItem(b, 2)];
    });

    describe('#addBasketItem(basketItem)', function () {

        it('can add a new basketItem to basket', function () {
            basket.addBasketItem(new BasketItem(d, 4));
            expect(basket.basketItems.length).toBe(3);
        });

        it('should increase the count if basketItem has existed', function () {
            basket.addBasketItem(new BasketItem(b, 2));
            var existedItem = _.find(basket.basketItems, function (item) {
                return item.book.title === 'B';
            });

            expect(existedItem.count).toBe(4);
        });
    });

    describe('#createBookSet()', function () {

        it('should be empty when basket is empty', function () {
            basket.basketItems = [];
            expect(basket.createBookSet()).toEqual([]);
        });

        it('should return a bookSet which includes different books', function () {
            basket.basketItems = [new BasketItem(a, 2), new BasketItem(b, 2),
                new BasketItem(c, 2), new BasketItem(d, 1), new BasketItem(e, 1)
            ];

            var expectBookSet = [a, b, c, d, e];
            expect(basket.createBookSet()).toEqual(expectBookSet);
        });
    });

    describe('#getAmount()', function () {

        it('should get no discount when buy one book', function () {
            basket.basketItems = [new BasketItem(a, 1)];
            expect(basket.getAmount()).toBe(8);
        });

        it('should get no discount when buy two same books', function () {
            basket.basketItems = [new BasketItem(a, 2)];
            expect(basket.getAmount()).toBe(16);
        });

        it('should get 5% discount when buy two different books', function () {
            basket.basketItems = [new BasketItem(a, 1), new BasketItem(b, 1)];
            expect(basket.getAmount()).toBe(15.2);
        });

        it('should get 10% discount when buy three different books', function () {
            basket.basketItems = [new BasketItem(a, 1), new BasketItem(b, 1), new BasketItem(c, 1)];
            expect(basket.getAmount()).toBe(21.6);
        });

        it('should get 20% discount when buy four different books', function () {
            basket.basketItems = [new BasketItem(a, 1), new BasketItem(b, 1), new BasketItem(c, 1),
                new BasketItem(d, 1)];
            expect(basket.getAmount()).toBe(25.6);
        });

        it('should get 25% discount when buy five different books', function () {
            basket.basketItems = [new BasketItem(a, 1), new BasketItem(b, 1), new BasketItem(c, 1),
                new BasketItem(d, 1), new BasketItem(e, 1)];
            expect(basket.getAmount()).toBe(30);
        });

        it('should get the biggest discount', function () {
            basket.basketItems = [new BasketItem(a, 2), new BasketItem(b, 2), new BasketItem(c, 2),
                new BasketItem(d, 1), new BasketItem(e, 1)];
            expect(basket.getAmount()).toBe(51.2);
        });

        it('should get the biggest discount more than 8 books', function () {
            basket.basketItems = [new BasketItem(a, 4), new BasketItem(b, 4), new BasketItem(c, 4),
                new BasketItem(d, 3), new BasketItem(e, 1)];
            expect(basket.getAmount()).toBe(102.4);
        });

        it('should get the biggest discount more than 8 books', function () {
            basket.basketItems = [new BasketItem(a, 4), new BasketItem(b, 4), new BasketItem(c, 4),
                new BasketItem(d, 3), new BasketItem(e, 1)];
            expect(basket.getAmount()).toBe(102.4);
        });

        it('should get the biggest discount more than 20 books', function () {
            basket.basketItems = [new BasketItem(a, 5), new BasketItem(b, 4), new BasketItem(c, 4),
                new BasketItem(d, 5), new BasketItem(e, 5)];
            expect(basket.getAmount()).toBe(141.2);
        });
    });
});
