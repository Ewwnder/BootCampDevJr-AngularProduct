import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt'; //Importando o locale da língua portuguesa

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

//Registrando o LocalePt
registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}  //Provider para usar o Locale, estamos dizendo que nosso Locale será Pt
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
