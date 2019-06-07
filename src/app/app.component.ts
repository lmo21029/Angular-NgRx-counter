import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement } from './ngrx/actions/counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count$: Observable<number>;
  data: number;

  constructor(private store: Store<any>) {
    this.count$ = this.store.pipe(select('count')).subscribe(numbers => {
      this.data = numbers;
    });
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }
}
