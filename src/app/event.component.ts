import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { State } from './store'
import { EventItem } from './eventItem.model'

@Component({
  templateUrl: './event.component.html'
})
export class EventComponent {
  @Input() selectedEvent: Observable<EventItem>

  constructor(private store: Store<State>) {
    this.selectedEvent = store.select(state => state.selectedEvent)
  }
}
