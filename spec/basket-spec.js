'use strict';

var Basket = require('../src/basket');
var BasketItem = require('../src/basket-item');
var Book = require('../src/book');

var _ = require('lodash');

describe('Basket', function () {

    var basket;

    beforeEach(function () {
        basket = new Basket();
        basket.basketItems = [new BasketItem('A', 1), new BasketItem('B', 2)];
    });

    describe('#addBasketItem(basketItem)', function () {

        it('can add a new basketItem to basket', function () {
            basket.addBasketItem(new BasketItem('D', 4));
            expect(basket.basketItems.length).toBe(3);
        });

        it('should increase the count if basketItem has existed', function () {
            basket.addBasketItem(new BasketItem('B', 2));
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

        it('should return an optimal combination', function () {
            basket.basketItems = [new BasketItem('A', 2), new BasketItem('B', 2),
                new BasketItem('C', 2), new BasketItem('D', 1), new BasketItem('E', 1)
            ];

            var expectBookSet = [new Book('A'), new Book('B'), new Book('C'),
                new Book('D')
            ];
            expect(basket.createBookSet()).toEqual(expectBookSet);
        });
    });

    describe('#getAmount()', function () {

        it('should get no discount when buy one book', function () {
            basket.basketItems = [new BasketItem('A', 1)];
            expect(basket.getAmount()).toBe(8);
        });

        it('should get no discount when buy two same books', function () {
            basket.basketItems = [new BasketItem('A', 2)];
            expect(basket.getAmount()).toBe(16);
        });

        it('should get 5% discount when buy two different books', function () {
            basket.basketItems = [new BasketItem('A', 1), new BasketItem('B', 1)];
            expect(basket.getAmount()).toBe(15.2);
        });

        it('should get 10% discount when buy three different books', function () {
            basket.basketItems = [new BasketItem('A', 1), new BasketItem('B', 1), new BasketItem('C', 1)];
            expect(basket.getAmount()).toBe(21.6);
        });

        it('should get 20% discount when buy four different books', function () {
            basket.basketItems = [new BasketItem('A', 1), new BasketItem('B', 1), new BasketItem('C', 1),
                new BasketItem('D', 1)];
            expect(basket.getAmount()).toBe(25.6);
        });

        it('should get 25% discount when buy five different books', function () {
            basket.basketItems = [new BasketItem('A', 1), new BasketItem('B', 1), new BasketItem('C', 1),
                new BasketItem('D', 1), new BasketItem('E', 1)];
            expect(basket.getAmount()).toBe(30);
        });

        it('should get the biggest discount', function () {
            basket.basketItems = [new BasketItem('A', 2), new BasketItem('B', 2), new BasketItem('C', 2),
                new BasketItem('D', 1), new BasketItem('E', 1)];
            expect(basket.getAmount()).toBe(51.2);
        });

        //下面这个测试跑不过
        it('should get the biggest discount more than 8 books', function () {
            basket.basketItems = [new BasketItem('A', 4), new BasketItem('B', 4), new BasketItem('C', 4),
                new BasketItem('D', 3), new BasketItem('E', 1)];
            expect(basket.getAmount()).toBe(16*(8*(1-0.2)));
        });
    });
});
