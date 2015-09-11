'use strict';

var Book = require('./book');

function BasketItem(title, count) {
    this.book = new Book(title);//为什么BasketItem要知道Book？
    this.count = count;
}

module.exports = BasketItem;