'use strict';

var Book = require('../src/book');

describe('Book', function () {

    it('should have a title', function () {
        var book = new Book('A');
        expect(book.title).toBe('A');
    });

    it('should have a default price that is 8', function () {
        var book = new Book('A');
        expect(book.price).toBe(8);
    });
});