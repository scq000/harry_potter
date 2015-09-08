'use strict';

var Calculator = require('../src/calculator');
var Book = require('../src/book');

describe('Calculator', function () {

    describe('#getPrice(bookSet)', function () {

        var calculator;

        beforeEach(function () {
            calculator = new Calculator();
        });

        it('should get no discount when bookSet has one book', function () {
            var bookSet = [new Book('A')];
            expect(calculator.getPrice(bookSet)).toBe(8);
        });

        it('should get 5% discount when bookSet has two books', function () {
            var bookSet = [new Book('A'),new Book('B')];
            expect(calculator.getPrice(bookSet)).toBe(15.2);
        });

        it('should get 10% discount when bookSet has three books', function () {
            var bookSet = [new Book('A'),new Book('B'),new Book('C')];
            expect(calculator.getPrice(bookSet)).toBe(21.6);
        });

        it('should get 20% discount when bookSet has four books', function () {
            var bookSet = [new Book('A'),new Book('B'),new Book('C'),new Book('D')];
            expect(calculator.getPrice(bookSet)).toBe(25.6);
        });

        it('should get 25% discount when bookSet has five books', function () {
            var bookSet = [new Book('A'),new Book('B'),new Book('C'),new Book('D'),new Book('E')];
            expect(calculator.getPrice(bookSet)).toBe(30);
        });
    });
});

