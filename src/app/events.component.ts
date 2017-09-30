import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/combineLatest'
import { Store } from '@ngrx/store'
import { State } from './store'
import { EventItem } from './eventItem.model'

@Component({
  templateUrl: './events.component.html'
})
export class EventsComponent {
  events: Observable<EventItem[]>
  sort: Observable<{ field: string, desc: boolean}>
  filter: Observable<string>
  displayEvents: Observable<EventItem[]>

  constructor(private store: Store<State>) {
    this.events = store.select(state => state.events)
    this.sort = store.select(state => state.sort)
    this.filter = store.select(state => state.filter)
    this.displayEvents = Observable.combineLatest(this.events, this.sort, this.filter, (events, sortBy, filterBy) => {
      return events.filter(e => e.Title.toLowerCase().includes(filterBy.toLowerCase())).sort(this.sortItems(sortBy))
    })
  }

  private sortItems = (rules) => (a: EventItem, b: EventItem) => {
    let direction = 0
    if (rules) {
        switch(rules.field) {
          case 'Title':
            direction = a.Title > b.Title ? 1 : -1
            break
          case 'Location':
            direction = a.Location > b.Location ? 1 : -1
            break
          case 'Date':
            direction = a.Date > b.Date ? 1 : -1
            break
          default:
            direction = 1
        }
        return rules.desc ? -direction : direction
      }
      return 1
  }
}
