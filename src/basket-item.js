'use strict';

var Book = require('./book');

function BasketItem(book, count) {
    this.book = book;
    this.count = count;
}

module.exports = BasketItem;