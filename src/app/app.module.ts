import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectableItemsComponent } from './dashboard/selectable-items/selectable-items.component';
import { CartItemsComponent } from './dashboard/cart-items/cart-items.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer } from './_shared/redux/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './_shared/redux/effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectableItemsComponent,
    CartItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({shoppingState: reducer}),
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
