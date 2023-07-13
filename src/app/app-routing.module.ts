import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfDevicesComponent } from './list-of-devices/list-of-devices.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes =[
    
  { path: 'authorization', component:   AuthorizationComponent},
  { path: 'listOfDevices', component:   ListOfDevicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
