import { Action } from '@ngrx/store'

import { Event, initialEvents } from './event.model'

// export const ADDEVENT = '[Event] Add'
// export const DELETEEVENT = '[Event] Update'
// export const UPDATEEVENT = '[Event] Update'
export const FILTEREVENTS = '[Events] Filter'
export const SORTEVENTS = '[Events] Sort'

export class FilterEvents implements Action {
  readonly type = FILTEREVENTS

  constructor(public payload: string) { }
}

export class SortEvents implements Action {
  readonly type = SORTEVENTS

  constructor(public payload: { field: string, desc: boolean}) { }
}

export type All = FilterEvents | SortEvents


export interface State {
  events: Event[]
  filter: string
  sort: { field: string, desc: boolean}
}

const initialState: State = {
  events: initialEvents(),
  filter: null,
  sort: { field: 'Name', desc: true}
}

export const reducer = function(state: State = initialState, action: All): State {
  if (action) {
    switch (action.type) {
      case FILTEREVENTS :
        return {...state, filter: action.payload }
      case SORTEVENTS :
        return {...state, sort: Object.assign({}, state.sort, action.payload)}
     default:
        return state
    }
  }
  return state
}
