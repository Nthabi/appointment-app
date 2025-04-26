import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-appintment-list',
  templateUrl: './appintment-list.component.html',
  styleUrl: './appintment-list.component.css'
})
export class AppintmentListComponent {

  counter = signal(0);

  increment() {
    this.counter.update((value) => value+1);
  }

  decrement() {
    this.counter.update(value => value-1);
  }

  reset() {
    this.counter.set(0);
  }
}
