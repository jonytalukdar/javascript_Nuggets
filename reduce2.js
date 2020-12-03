const cart = [
  {
    title: 'Samsung Galaxy s7',
    price: 599.9,
    amount: 1,
  },
  {
    title: 'Goggle pixel',
    price: 499.9,
    amount: 2,
  },
  {
    title: 'Xiomi Redmi Note 2',
    price: 699.9,
    amount: 4,
  },
  {
    title: 'Xiomi Redmi note 5',
    price: 399.9,
    amount: 3,
  },
];

let { totalItem, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItem += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItem: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2));

console.log(totalItem, cartTotal);
