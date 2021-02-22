import { Injectable } from '@angular/core';
import * as list from './../../../../src/assets/data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  getProducts() {
   return (list as any).default ;
  }
}
