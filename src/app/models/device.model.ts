import { State, StateOff } from '.';

export class Device {
  serialNumber: string;
  stateColor: string;

  private state: State;

  constructor(serialNumber: string) {
    this.serialNumber = serialNumber;
    this.transitionTo(new StateOff());
  }

  toggleState(): void {
    this.state.power();
  }

  transitionTo(state: State) {
    this.state = state;
    this.state.setContext(this);
    this.stateColor = this.state.color;
  }
}
