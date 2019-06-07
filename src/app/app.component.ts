import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement } from './ngrx/actions/counter.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  count: Subscription;
  data: number;

  constructor(private store: Store<any>) {
    this.count = this.store.pipe(select('count')).subscribe(numbers => {
      this.data = numbers;
    });
  }

  ngOnDestroy() {
    this.count.unsubscribe();
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
