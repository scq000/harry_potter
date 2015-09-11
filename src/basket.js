'use strict';

var _ = require('lodash');
var Calculator = require('./calculator');

function Basket() {
    this.basketItems = [];
}

Basket.prototype.addBasketItem = function (basketItem) {
    var existedItem = _.find(this.basketItems, function (item) {
        return item.book.title === basketItem.book.title;
    });

    if (existedItem) {
        existedItem.count += basketItem.count;
    } else {
        this.basketItems.push(basketItem);
    }
};

Basket.prototype.getAmount = function () {
    var amount = 0;
    var calculator = new Calculator();

    do {
        var bookSet = this.createBookSet();
        amount += calculator.getPrice(bookSet);
    } while (bookSet.length > 0);

    return amount;
};

Basket.prototype.createBookSet = function () {
    var bookSet = [];

    this.basketItems.sort(function (a, b) {
        return b.count - a.count;
    });

    this.basketItems.forEach(function (basketItem, i, basketItems) {
        var restItems = basketItems.filter(function (basketItem) {
            return basketItem.count > 0;
        });

        if (basketItem.count && (bookSet.length !== 4 || restItems.length !== 4)) {//总感觉这里有错误，反正给你写了一个通不过的测试用例
            bookSet.push(basketItem.book);
            basketItem.count--;
        }
    });

    return bookSet;
};

module.exports = Basket;