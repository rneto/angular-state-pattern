import { StateOff } from './state-off.model';
import { State } from './state.model';

export class StateOn extends State {
  color: string = 'red';

  power(): void {
    this.context.transitionTo(new StateOff());
  }
}
