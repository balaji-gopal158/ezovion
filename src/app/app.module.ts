import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TableComponent } from './table/table.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PercentageDirective } from './percentage.directive';
import { PriceDirective } from './price.directive';
import { NumericDirective } from './numeric.directive';
import { CharacterDirective } from './character.directive';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PercentageDirective,
    PriceDirective,
    NumericDirective,
    CharacterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
   
    ReactiveFormsModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
