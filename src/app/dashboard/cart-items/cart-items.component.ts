import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './../../models/appstate.model';
import { Product } from './../../models/product.model';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.cartItems = this.store.select(state => state.shoppingState.cartItems);
  }

  getTotalPrice() {
    let total = 0;
    this.cartItems.subscribe(list => list.map(item => total += item.price * item.quantity));
    return total;
  }
}
