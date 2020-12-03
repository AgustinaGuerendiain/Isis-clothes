import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.scss']
})
export class ClothingListComponent implements OnInit {

  clothing = { 
    "imagen" : "assets/img/princesa.jpg",
    "nombre" : "Princesa",
    "tipo" : "Remera",
    "precio" : "$795",
    "stock" : "4"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
