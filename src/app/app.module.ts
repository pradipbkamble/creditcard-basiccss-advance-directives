import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvancecssDirective } from './advancecss.directive';
import { BasicCss } from './basiccss.directive';
import { CreditCardDirective } from './derectives/chunk.derective';


@NgModule({
  declarations: [
    AppComponent,
    AdvancecssDirective,
    BasicCss,
    CreditCardDirective
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
