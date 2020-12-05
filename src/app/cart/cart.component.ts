import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ClothingCartService } from '../clothing-cart.service';
import { Clothing } from '../clothing-list/Clothing';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$ : Observable <Clothing[]>;
  
  constructor(private cart:ClothingCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
