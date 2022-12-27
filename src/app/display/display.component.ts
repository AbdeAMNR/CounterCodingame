import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'display-component',
  template: `
    <div>{{message}} {{counter}}</div>
    <counter-component
      [message]="message" 
      (tick)=counterTick($event)>
    </counter-component>
  `,
})
export class DisplayComponent {
  public counter: number = 0;
  public message: string = 'hello world';

  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }
}
