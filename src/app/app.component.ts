import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { State } from './store'
import { EventItem } from './eventItem.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: Observable<EventItem[]>

  constructor(private store: Store<State>) {
    this.events = store.select(state => state.events)
  }
}
