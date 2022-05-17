import { Device } from './device.model';

export abstract class State {
  abstract color: string;
  protected context: Device;

  setContext(device: Device) {
    this.context = device;
  }

  abstract power(): void;
}
