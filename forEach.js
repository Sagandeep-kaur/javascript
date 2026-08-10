const items = [1, 29, 47];
const squareOfItems = [];

items.forEach(function (item) {
    squareOfItems.push(item * item);
});

console.log(squareOfItems);
console.log(items);