'use strict';

var DISCOUNT_RULE = require('./lib/discount-rule');

function Calculator() {}

Calculator.prototype.getPrice = function (bookSet) {
    var price = 0;

    bookSet.forEach(function (book) {
        price += book.price;
    });

    if (bookSet.length === 2) {
        return price * DISCOUNT_RULE.TWO_BOOKS;
    } else if (bookSet.length === 3) {
        return price * DISCOUNT_RULE.THREE_BOOKS;
    } else if (bookSet.length === 4) {
        return price * DISCOUNT_RULE.FOUR_BOOKS;
    } else if (bookSet.length === 5) {
        return price * DISCOUNT_RULE.FIVE_BOOKS;
    } else {
        return price;
    }
};

module.exports = Calculator;