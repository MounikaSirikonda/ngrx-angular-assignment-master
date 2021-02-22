import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ApiServiceService } from './../services/api-service.service';
import * as ProductActions from './actions';

@Injectable()
export class ShoppingEffects {
  constructor(private actions: Actions, private apiService: ApiServiceService) { }

  loadData = createEffect(() => {
    const productList: Product[] = this.apiService.getProducts();

    const prodListObservable = new Observable((observer) => {
      observer.next(productList);
      observer.complete();
    });

    return this.actions.pipe(
      ofType(ProductActions.ProductActionTypes.LOAD_DATA_BEGIN),
      switchMap(() => {
        return prodListObservable.pipe(
          map(data => new ProductActions.LoadDataSuccess(data as Product[])),
          catchError(error =>
            of(new ProductActions.LoadDataFailure(error))
          )
        );
      })
    );
  });
}
