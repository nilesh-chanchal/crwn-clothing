import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const SelectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [SelectCartItems],
    (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => (accumulatedQuantity + cartItem.quantity), 0)
)

export const SelectCartHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden
)