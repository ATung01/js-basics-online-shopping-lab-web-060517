var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = getRandomInt(1, 100);
  var cartItem = new Object({[item]: itemPrice});
  cart.push(cartItem)
  console.log(`${item} has been added to your cart.`)
  return cart;

}

function viewCart() {
  var basket = ""
  for (var i = 0; i < cart.length; i++) {
    basket += (Object.keys(cart[i]) + " at $" + Object.values(cart[i]));
     if (cart.length === 1) {
      break;
    }
    else if (cart.length === 2) {
      i++;
      basket += " and " + (Object.keys(cart[i]) + " at $" + Object.values(cart[i]));

    }
    else if ((i + 2) === cart.length) {
      i++;
      basket += ", and " + (Object.keys(cart[i]) + " at $" + Object.values(cart[i]));
      break;
    }
    else {
      basket += ", "
    }
  }
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
  else {
    console.log( `In your cart, you have ${basket}.`)
  }

}

function total() {
  var total = 0
  for (var i = 0, len = cart.length; i < len; i++) {
    total += parseInt(Object.values(cart[i]));
  }
  return total
  // write your code here
}

function removeFromCart(item) {
  var exist = false

  for (var i = 0, len = cart.length; i < len; i++) {
    if(Object.keys(cart[i]) == item) {
      exist = true;
      cart.splice(i, 1);
      break;
    }
  }
  if(exist === false) {
    console.log('That item is not in your cart.');
  }

  // write your code here
}

function placeOrder(cardNumber) {
  // total()
  if (typeof cardNumber === "undefined") {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
  // write your code here
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

}
