import { CURRENCY_CHANGED } from '../currency/currencyTypes';
import { PRODUCT_ADDED, PRODUCT_QUANTITY_CHANGED } from './cartTypes';

// * function to handle addition of products to cart
const onAdd = (cartItems, product, quantity = 1) => {
  // function to create a unique ...
  // ... product id using selected attributes
  const createNewId = receivedProduct => {
    const extracted = [];
    extracted.push(receivedProduct.id);
    receivedProduct.attributes.forEach(attr => {
      const selectedValues = attr.items.filter(
        value => value.selected === true
      );
      // remove whitespace from attr name
      const trimmedAttrName = attr.id.replace(/\s+/g, '');
      // join attr name and selected value into one string
      const attrString = `${trimmedAttrName}=${selectedValues[0].value}`;
      // push attr string to array for joining
      extracted.push(attrString);
    });
    // joins the product id and selected attributes to form new id
    const newId = extracted.join('+');
    return newId;
  };

  // adds new id to product
  const productWithNewId = {
    ...product,
    newId: createNewId(product),
  };

  // make a copy of the cart from state
  const cartClone = structuredClone(cartItems);

  // check if id the product is already in cart
  const foundProduct = cartClone.find(
    item => productWithNewId.newId === item.newId
  );

  if (foundProduct === undefined) {
    // if the product does not exist in cart ...
    // ... add a quantity property set to 1

    const newProduct = {
      ...productWithNewId,
      quantity: quantity,
    };
    // push product to cart as new entry
    cartClone.push(newProduct);
  } else {
    // if the product already exists in cart ...
    // ... find the index of the product in cart ...
    const foundProductIndex = cartClone.findIndex(
      item => productWithNewId.newId === item.newId
    );

    // ... increase quantity
    cartClone[foundProductIndex].quantity += quantity;
  }

  // returns the updated cart to pass to reducer
  return cartClone;
};

const changeCartItemQuanitity = (cartItems, id, value) => {
  // makes a copy of the cart items array
  const newCartItems = [...cartItems];

  // finds the index of the item
  const productIndex = newCartItems.findIndex(product => product.newId === id);

  if (value === 'inc') {
    // increses item quantity if 'inc'
    newCartItems[productIndex].quantity += 1;
  } else if (value === 'dec') {
    // decreses item quantity if 'dec' ...
    // ... and item quantity more than 1
    if (newCartItems[productIndex].quantity > 1) {
      newCartItems[productIndex].quantity -= 1;
    }
  }
  return newCartItems;
};

const updateTotalCount = cartItems => {
  // declare count
  let count = 0;

  // loop through cart items and increase count
  cartItems.map(item => (count += item.quantity));

  return count;
};

const sumTotalPrice = (cartItems, currency) => {
  // declare price
  let price = 0;

  // loops through al cart items
  cartItems.map(
    item =>
      (price +=
        // finds the amount with the currenct state currency, ...
        // ... multiply it by quantity and assigns to price
        item.prices.find(price => price.currency.label === currency.label)
          .amount * item.quantity)
  );

  return price;
};

const initialState = {
  cartItems: [],
  totalProductCount: 0,
  totalPrice: 0,
  evaluationCurrency: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return {
        ...state,
        cartItems: onAdd(state.cartItems, action.payload),
        totalProductCount: updateTotalCount(
          onAdd(state.cartItems, action.payload)
        ),
        totalPrice: sumTotalPrice(
          onAdd(state.cartItems, action.payload),
          state.evaluationCurrency
        ),
      };

    case PRODUCT_QUANTITY_CHANGED:
      return {
        ...state,
        cartItems: changeCartItemQuanitity(
          state.cartItems,
          action.payload.id,
          action.payload.value
        ),
        totalProductCount: updateTotalCount(state.cartItems),
        totalPrice: sumTotalPrice(state.cartItems, state.evaluationCurrency),
      };

    case CURRENCY_CHANGED:
      return {
        ...state,
        evaluationCurrency: action.payload,
        totalPrice: sumTotalPrice(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
