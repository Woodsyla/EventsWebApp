import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { EventItem } from './eventItem.model'
import { SortBy } from './sortBy.model'
import { Store } from '@ngrx/store'
import * as fromStore from './store'

@Component({
  selector: 'sortable-header',
  templateUrl: './sortableHeader.component.html'
})
export class SortableHeaderComponent {
  @Input() field: string
  @Input() currentSort: SortBy

  constructor(private store: Store<fromStore.State>) {
    store.select(state => state.sort).subscribe(sort => this.currentSort = sort)
  }

  sortBy = (field) => {
    let desc = this.currentSort.Desc
    if (this.currentSort.Field === field)
    {
      // reverse order
      desc = !desc
    }
    this.store.dispatch(new fromStore.SortEvents({ Field: field, Desc: desc}))
  }
}
