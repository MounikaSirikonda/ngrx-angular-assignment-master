import { ShoppingState } from './../../models/shoppingstate.model';
import * as ProductActions from './actions';

const initialState: ShoppingState = {
    products: [],
    cartItems: []
};

export function reducer(state: ShoppingState = initialState, action: ProductActions.Actions) {
    let clonedCart;
    switch (action.type) {
        case ProductActions.ProductActionTypes.LOAD_DATA_SUCCESS:
            return { ...state, products: [...state.products, ...action.payload] };

        case ProductActions.ProductActionTypes.ADD_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payload] };

        case ProductActions.ProductActionTypes.INCREMENT_QTY:
            clonedCart = JSON.parse(JSON.stringify(state.cartItems));
            clonedCart.find(x => x.name === action.payload).quantity += 1;
            return { ...state, cartItems: clonedCart };

        case ProductActions.ProductActionTypes.DECREMENT_QTY:
            clonedCart = JSON.parse(JSON.stringify(state.cartItems));
            const idx = clonedCart.findIndex(x => x.name === action.payload);
            if (clonedCart[idx].quantity === 1) {
                return { ...state, cartItems: [...clonedCart.filter(x => x.name !== action.payload)] };
            } else {
                clonedCart[idx].quantity -= 1;
                return { ...state, cartItems: clonedCart };
            }

        default:
            return state;
    }
}
