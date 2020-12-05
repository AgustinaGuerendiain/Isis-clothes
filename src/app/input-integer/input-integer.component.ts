import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clothing } from '../clothing-list/Clothing';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() cantidad: number;
  @Input() max: number;
  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upCantidad(): void {
    if (this.cantidad < this.max) {
      this.cantidad++;
    }else{
      this.maxReached.emit("Maximo alcanzado");
    }
    
  }

  downCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
    }
  }

  changeCantidad(event): void {
    console.log(event.code);
  }

}
