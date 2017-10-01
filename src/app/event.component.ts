import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { State } from './store'
import { EventItem } from './eventItem.model'

@Component({
  templateUrl: './event.component.html'
})
export class EventComponent {
  selectedEvent: EventItem

  constructor(private store: Store<State>) {
    store.select(state => state.selectedEvent).subscribe(event => this.selectedEvent = event)
  }
}
