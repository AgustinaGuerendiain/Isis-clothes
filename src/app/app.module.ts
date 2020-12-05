import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothingListComponent } from './clothing-list/clothing-list.component';
import { FormsModule } from '@angular/forms';
import { IsisContactoComponent } from './isis-contacto/isis-contacto.component';
import { IsisClothingComponent } from './isis-clothing/isis-clothing.component';
import { CartComponent } from './cart/cart.component'


@NgModule({
  declarations: [
    AppComponent,
    ClothingListComponent,
    IsisContactoComponent,
    IsisClothingComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
