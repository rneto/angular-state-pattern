import { Component, Input } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'camera',
  template: `<div class="button" (click)="onSwitcherClick()" [style.border-color]="device.stateColor" [style.color]="device.stateColor">Camera {{device.serialNumber}}
    <div class="button-state" [style.background-color]="device.stateColor">on / off</div></div>`,
  styles: [
    '.button { display: flex; align-items:center; gap: 4px; margin: 4px; padding: 2px 4px; border: 3px solid black; cursor: pointer; user-select: none; }',
    '.button-state { padding: 8px 16px; border: none; color: #ffffff; }',
  ],
})
export class CameraComponent {
  @Input() device: Device;

  onSwitcherClick(): void {
    this.device.toggleState();
  }
}
