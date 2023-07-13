import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListOfDevicesComponent } from './list-of-devices/list-of-devices.component'
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { AuthorizationComponent } from './authorization/authorization.component'

registerLocaleData(localeRu)


@NgModule({
  declarations: [
    AppComponent,
    ListOfDevicesComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent, ListOfDevicesComponent,
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
