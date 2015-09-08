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

    for (var i = 0, len = this.basketItems.length; i < len; i++) {

        var restItems = this.basketItems.filter(function (item) {
            return item.count > 0;
        });

        if (bookSet.length === 4 && restItems.length === 4) {
            continue;
        }

        if (this.basketItems[i].count > 0) {
            bookSet.push(this.basketItems[i].book);
            this.basketItems[i].count--;
        }
    }

    return bookSet;
};

module.exports = Basket;