import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothingListComponent } from './clothing-list/clothing-list.component';
import { ClothingShoppingComponent } from './clothing-shopping/clothing-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothingListComponent,
    ClothingShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
