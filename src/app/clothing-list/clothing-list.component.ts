import { Component, OnInit } from '@angular/core';
import { ClothingCartService } from '../clothing-cart.service';
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
    },
    { 
    nombre : "Freedom",
    tipo : "Remera",
    precio : 1050,
    stock :  10,
    imagen : "assets/img/freedom.jpg",
    oferta : false,
    cantidad : 0,
    },
    { 
    nombre : "Queen",
    tipo : "Top",
    precio : 1095,
    stock :  5,
    imagen : "assets/img/princess.jpg",
    oferta : false,
    cantidad : 0,
    },
    { 
    nombre : "Baby",
    tipo : "Remeron",
    precio : 1920,
    stock :  7,
    imagen : "assets/img/remeron.jpg",
    oferta : false,
    cantidad : 0,
    },
    { 
    nombre : "Rolling",
    tipo : "Remera",
    precio : 1950,
    stock :  3,
    imagen : "assets/img/rolling.jpg",
    oferta : false,
    cantidad : 0,
    },
  ]

  constructor(private cart:ClothingCartService ) { 

  }

  ngOnInit(): void {
  }

  maxReached(mensaje: string){
    alert(mensaje);
  }

  addToCart(clothing): void{

    this.cart.addToCart(clothing);

    clothing.stock -= clothing.cantidad;
    clothing.cantidad = 0;
  }

}


