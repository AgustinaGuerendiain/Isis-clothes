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
    imagen : "assets/img/princesa.jpg"
    },
    { 
    nombre : "Hell baby",
    tipo : "Remera",
    precio : 1050,
    stock :  5,
    imagen : "assets/img/hellbaby.jpg"
    },
    { 
      nombre : "Frunce",
      tipo : "top",
      precio : 1530,
      stock :  6,
      imagen : "assets/img/frunce.jpeg"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
