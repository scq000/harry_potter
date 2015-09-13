'use strict';

var _ = require('lodash');
var Calculator = require('./calculator');

function Basket() {
    this.basketItems = [];
}

Basket.prototype.addItem = function (basketItem) {
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

    var bookCounter = [];

    do {
        var bookSet = this.createBookSet();
        amount += calculator.getPrice(bookSet);
        bookCounter.push(bookSet.length);
    } while (bookSet.length > 0);

    if (_.include(bookCounter, 5) && _.include(bookCounter, 3)) {
        amount -= 0.4;
    }

    return Math.round(amount*100)/100;
};

Basket.prototype.createBookSet = function () {
    var bookSet = [];

    this.basketItems.forEach(function (basketItem) {
        if (basketItem.count) {
            bookSet.push(basketItem.book);
            basketItem.count--;
        }
    });

    return bookSet;
};

module.exports = Basket;