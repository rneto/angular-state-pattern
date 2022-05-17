import { StateOn } from './state-on.model';
import { State } from './state.model';

export class StateOff extends State {
  color: string = 'black';

  power(): void {
    this.context.transitionTo(new StateOn());
  }
}
