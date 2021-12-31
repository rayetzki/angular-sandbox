import { Component } from "@angular/core";

@Component({
  selector: "timer",
  template: `
    <div><b>Using interval</b></div>
    <div>Counter: {{ count }}</div>
    <div *ngIf="count === 0">This is a component</div>
  `
})
export class TimerComponent {
  count = 10;

  timeout = window.setInterval(() => {
    if (this.count > 0) {
      this.count -= 1;
    } else {
      clearInterval(this.timeout);
    }
  }, 500);
}
