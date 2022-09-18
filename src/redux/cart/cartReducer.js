import {
  PRODUCT_ADDED,
  PRODUCT_QUANTITY_CHANGED,
  PRODUCT_ATTRIBUTE_CHANGED,
  PRODUCT_COLOR_CHANGED,
} from './cartTypes';

const onAdd = (cartItems, product, quantity = 1) => {
  // * checks if product already exists in the cart and returns product
  const checkProductInCart = cartItems.find(item => product.id === item.id);

  // * if product exists, increase the quantity only, else add a new product entry
  const updatedCartItems = [...cartItems];
  if (checkProductInCart) {
    const productIndex = updatedCartItems.findIndex(
      cartProduct => cartProduct.id === product.id
    );
    updatedCartItems[productIndex].quantity += quantity;
    //   setCartItems(updatedCartItems);
    // return updatedCartItems
  } else {
    // if product is not in cart ...
    //update the quantity
    product.quantity = quantity;

    // add product to cart
    updatedCartItems.push(product);
  }
  return updatedCartItems;
};

const changeCartItemQuanitity = (cartItems, id, value) => {
  // makes a copy of the cart items array
  const newCartItems = [...cartItems];

  // finds the index of the item
  const productIndex = newCartItems.findIndex(product => product.id === id);

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

const initialState = {
  cartItems: [
    {
      id: 'apple-iphone-12-pro',
      quantity: 2,
      name: 'iPhone 12 Pro',
      gallery: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000',
      ],
      description: 'This is iPhone 12. Nothing else to say.',
      brand: 'Apple',
      attributes: [
        {
          id: 'Capacity',
          name: 'Capacity',
          type: 'text',
          items: [
            {
              displayValue: '512G',
              value: '512G',
            },
            {
              displayValue: '1T',
              value: '1T',
            },
          ],
        },
        {
          id: 'Color',
          name: 'Color',
          type: 'swatch',
          items: [
            {
              displayValue: 'Green',
              value: '#44FF03',
            },
            {
              displayValue: 'Cyan',
              value: '#03FFF7',
            },
            {
              displayValue: 'Blue',
              value: '#030BFF',
            },
            {
              displayValue: 'Black',
              value: '#000000',
            },
            {
              displayValue: 'White',
              value: '#FFFFFF',
            },
          ],
        },
      ],
      prices: [
        {
          currency: {
            symbol: '$',
          },
          amount: 1000.76,
        },
        {
          currency: {
            symbol: '£',
          },
          amount: 719.34,
        },
        {
          currency: {
            symbol: 'A$',
          },
          amount: 1290.99,
        },
        {
          currency: {
            symbol: '¥',
          },
          amount: 108074.6,
        },
        {
          currency: {
            symbol: '₽',
          },
          amount: 75680.48,
        },
      ],
    },
  ],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_ADDED:
      return {
        ...state,
        cartItems: onAdd(state.cartItems, action.payload),
      };

    case PRODUCT_QUANTITY_CHANGED:
      return {
        ...state,
        cartItems: changeCartItemQuanitity(
          state.cartItems,
          action.payload.id,
          action.payload.value
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
