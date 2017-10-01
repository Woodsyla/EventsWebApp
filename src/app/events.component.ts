import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/combineLatest'
import { Store } from '@ngrx/store'
import * as fromStore from './store'
import { EventItem } from './eventItem.model'
import { SortBy } from './sortBy.model'

@Component({
  templateUrl: './events.component.html'
})
export class EventsComponent {
  events: Observable<EventItem[]>
  sort: Observable<SortBy>
  filter: Observable<string>
  displayEvents: Observable<EventItem[]>

  constructor(private store: Store<fromStore.State>, private router: Router) {
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
        switch(rules.Field) {
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
        return rules.Desc ? -direction : direction
      }
      return 1
  }

  filterEvent = (event) => {
    this.store.dispatch(new fromStore.FilterEvents(event.target.value))
  }

  selectEvent = (item: EventItem) => {
    this.store.dispatch(new fromStore.SelectEvent(item))
    this.router.navigate(['/selectedEvent'])
  }
}
