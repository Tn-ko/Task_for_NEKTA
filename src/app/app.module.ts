import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListOfDevicesComponent } from './list-of-devices/list-of-devices.component'
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru'

registerLocaleData(localeRu)

const appRoutes: Routes =[
    
  { path: 'listOfDevices', component:   ListOfDevicesComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfDevicesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent,     ListOfDevicesComponent,
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
