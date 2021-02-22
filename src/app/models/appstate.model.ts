import { ShoppingState } from './shoppingstate.model';

export interface AppState {
    readonly shoppingState: ShoppingState;
}
