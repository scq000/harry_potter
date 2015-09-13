# 解题思路(Solution Ideas)
分为四个类
Book类：基础类，带有书本的title和price
BasketItem类：购物篮中的书本,带有数量信息
Basket类: 　构造函数中有一个basketItems数组，用于存放购买的书籍信息
 addItem: 添加书本
 createBookSet: 创建书本集合，从购物篮(basket)中取出书籍(basketItem)，将不同书籍进行打包，返回书本集合
 getAmount: 获得总价，调用createBookSet方法，分组书籍，并利用计算器(calculator)计算价格，如果存在5-3组合就将总价减去４毛钱(4-4折扣的差价)
Calculator类:　计算器，处理打折信息
 getPrice: bookSet作为参数，根据折扣信息计算其总价

# Requirement

To try and encourage more sales of the 5 different Harry Potter books they sell, a bookshop has decided to offer discounts of multiple-book purchases.

One copy of any of the five books costs 8 EUR.

If, however, you buy two different books, you get a 5% discount on those two books.

If you buy 3 different books, you get a 10% discount.

If you buy 4 different books, you get a 20% discount.

If you go the whole hog, and buy all 5, you get a huge 25% discount.

Note that if you buy, say, four books, of which 3 are different titles, you get a 10% discount on the 3 that form part of a set, but the fourth book still costs 8 EUR.

Your mission is to write a piece of code to calculate the price of any conceivable shopping basket (containing only Harry Potter books), giving as big a discount as possible.

For example, how much does this basket of books cost?

2 copies of the first book
2 copies of the second book
2 copies of the third book
1 copy of the fourth book
1 copy of the fifth book
One way of group these 8 books is:

 1 group of 5 --> 25% discount (1st,2nd,3rd,4th,5th)
+1 group of 3 --> 10% discount (1st,2nd,3rd)
This would give a total of

 5 books at a 25% discount
+3 books at a 10% discount
Giving

 5 x (8 - 2.00) == 5 x 6.00 == 30.00
+3 x (8 - 0.80) == 3 x 7.20 == 21.60
For a total of 51.60

However, a different way to group these 8 books is:

 1 group of 4 books --> 20% discount  (1st,2nd,3rd,4th)
+1 group of 4 books --> 20% discount  (1st,2nd,3rd,5th)
This would give a total of

 4 books at a 20% discount
+4 books at a 20% discount
Giving

 4 x (8-1.60) == 4 x 6.40 == 25.60
+4 x (8-1.60) == 4 x 6.40 == 25.60
For a total of 51.20

And 51.20 is the price with the biggest discount.
