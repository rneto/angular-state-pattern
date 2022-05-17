import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  camera1: Device;
  camera2: Device;
  camera3: Device;

  constructor() {
    this.camera1 = new Device('C01');
    this.camera2 = new Device('C02');
    this.camera3 = new Device('C03');
  }
}
