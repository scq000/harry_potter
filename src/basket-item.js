var Book = require('./book');

function BasketItem(title,count) {
    this.book = new Book(title);
    this.count = count;
}

module.exports = BasketItem;