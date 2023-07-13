import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { DeviceService } from '../services/devices.service';

@Component({
  selector: 'app-list-of-devices',
  templateUrl: './list-of-devices.component.html'

})
@Injectable()
export class ListOfDevicesComponent implements OnInit {
  title = 'list-of-devices.component';
  public metering_devices: any[];
  formatVar = "ДД.MM.ГГГГ чч:мм";

  constructor(private deviceService: DeviceService) {
  }
  ngOnInit() {
    this.deviceService.listOfDevices().subscribe({
      next: (response: any) => {
        this.metering_devices = response.data.metering_devices.data;

      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);

      }
    });
  }

}







