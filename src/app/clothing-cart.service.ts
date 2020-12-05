import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clothing } from './clothing-list/Clothing';

@Injectable({
  providedIn: 'root'
})

export class ClothingCartService {

  constructor() { }

  private _cartList: Clothing[] = [];
  cartList : BehaviorSubject <Clothing[]> = new BehaviorSubject([]);


  addToCart(clothing: Clothing) {
    let item : Clothing = this._cartList.find( (v1)=> v1.nombre == clothing.nombre );

    if (!item) {
      this._cartList.push({... clothing});
    }else{
      item.cantidad += clothing.cantidad; 
    }

    //console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

  
}
