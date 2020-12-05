import { Component, OnInit } from '@angular/core';
import { Clothing } from './Clothing';


@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.scss']
})
export class ClothingListComponent implements OnInit {

  clothings : Clothing[] = [ 
    { 
    nombre : "Princesa",
    tipo : "Remera",
    precio : 795,
    stock :  4,
    imagen : "assets/img/princesa.jpg",
    oferta : false,
    cantidad : 0,
    },
    { 
    nombre : "Hell baby",
    tipo : "Remera",
    precio : 1050,
    stock :  0,
    imagen : "assets/img/hellbaby.jpg",
    oferta : false,
    cantidad : 0,
    },
    { 
      nombre : "Frunce",
      tipo : "Top",
      precio : 1530,
      stock :  6,
      imagen : "assets/img/frunce.jpeg",
      oferta : true,
      cantidad : 0,
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(clothing : Clothing): void {
    if (clothing.cantidad < clothing.stock) {
      clothing.cantidad++;
    }
    
  }

  downCantidad(clothing : Clothing): void {
    if (clothing.cantidad > 0) {
      clothing.cantidad--;
    }
  }

  changeCantidad(event, clothing : Clothing): void {
    console.log(event.code);
  }



}


