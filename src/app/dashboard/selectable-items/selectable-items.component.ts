import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../models/appstate.model';
import { Product } from './../../models/product.model';
import { AddToCart, DecrementQty, IncrementQty, LoadDataBegin } from './../../_shared/redux/actions';

@Component({
  selector: 'selectable-items',
  templateUrl: './selectable-items.component.html',
  styleUrls: ['./selectable-items.component.scss']
})
export class SelectableItemsComponent implements OnInit {
  products: Observable<Product[]>;
  cartItems: Observable<Product[]>;
  clonedProduct: Product;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadDataBegin());
    this.products = this.store.select(state => state.shoppingState.products);
    this.cartItems = this.store.select(state => state.shoppingState.cartItems);
  }

  onAddToCart(product: Product) {
    this.clonedProduct = JSON.parse(JSON.stringify(product));
    this.clonedProduct.quantity = 1;
    this.store.dispatch(new AddToCart(this.clonedProduct));
  }

  getQuantity(product: Product) {
    let items: Product[];
    this.cartItems.subscribe(list => items = list);
    if (items) {
      const cartItem = items.find(x => x.name === product.name);
      return cartItem ? cartItem.quantity : 0;
    }
    return 0;
  }

  onIncrement(product: Product) {
    this.store.dispatch(new IncrementQty(product.name));
  }

  onDecrement(product: Product) {
    this.store.dispatch(new DecrementQty(product.name));
  }
}
