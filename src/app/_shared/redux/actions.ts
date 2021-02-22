import { Action } from '@ngrx/store';
import { Product } from './../../models/product.model';

export enum ProductActionTypes {
    LOAD_DATA_BEGIN = '[PRODUCT] Load data begin',
    LOAD_DATA_SUCCESS = '[PRODUCT] Load data success',
    LOAD_DATA_FAILURE = '[PRODUCT] Load data failure',
    ADD_ITEM = '[PRODUCT] AddItem',
    INCREMENT_QTY = '[PRODUCT] Increment',
    DECREMENT_QTY = '[PRODUCT] Decrement'
}

export class LoadDataBegin implements Action {
    readonly type = ProductActionTypes.LOAD_DATA_BEGIN;
}

export class LoadDataSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_DATA_SUCCESS;

    constructor(public payload: Product[]) { }
}

export class LoadDataFailure implements Action {
    readonly type = ProductActionTypes.LOAD_DATA_FAILURE;

    constructor(public payload: any) { }
}

export class AddToCart implements Action {
    readonly type = ProductActionTypes.ADD_ITEM;

    constructor(public payload: Product) { }
}

export class IncrementQty implements Action {
    readonly type = ProductActionTypes.INCREMENT_QTY;

    constructor(public payload: string) { }
}

export class DecrementQty implements Action {
    readonly type = ProductActionTypes.DECREMENT_QTY;

    constructor(public payload: string) { }
}

export type Actions = LoadDataBegin
    | LoadDataSuccess
    | LoadDataFailure
    | AddToCart
    | IncrementQty
    | DecrementQty;
