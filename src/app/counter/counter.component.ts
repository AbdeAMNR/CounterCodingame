import { Component, Output, Input, EventEmitter, OnDestroy, } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
  <input id="intervalInput" type="number" [value]="inputValue" (input)="setValue($event)"/>
  <button id="intervalSetButton" (click)="setPeriod()">Set interval</button>
  `,
})
export class CounterComponent implements OnDestroy {
  public inputValue: string = '';
  public thePeriod: any; //NodeJS.Timer;

  @Input() message!: string;
  @Output() public tick: EventEmitter<string> = new EventEmitter();

  public setValue(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.inputValue = target.value;
  }

  public setPeriod(): void {
    this.thePeriod = setInterval(() => this.tick.emit(this.message), +this.inputValue);
  }

  ngOnDestroy(): void {
    clearInterval(this.thePeriod);
  }
}
