'use strict';

describe('Book', function () {

    it('should have a title', function () {
        var book = new Book('First');
        expect(book.title).toBe('First');
    });

    it('should have a default price that is 8', function () {
        var book = new Book('First');
        expect(book.price).toBe(8);
    });
});