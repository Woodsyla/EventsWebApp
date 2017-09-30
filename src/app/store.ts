import { Action } from '@ngrx/store'

import { EventItem, initialEvents } from './eventItem.model'

export const FILTEREVENTS = '[Events] Filter'
export const SORTEVENTS = '[Events] Sort'
export const SELECTEVENT = '[Event] Select'

export class FilterEvents implements Action {
  readonly type = FILTEREVENTS

  constructor(public payload: string) { }
}

export class SortEvents implements Action {
  readonly type = SORTEVENTS

  constructor(public payload: { field: string, desc: boolean}) { }
}

export class SelectEvent implements Action {
  readonly type = SELECTEVENT

  constructor(public payload: EventItem) { }
}

export type All = FilterEvents | SortEvents | SelectEvent


export interface State {
  events: EventItem[]
  filter: string
  sort: { field: string, desc: boolean}
  selectedEvent: EventItem
}

const initialState: State = {
  events: initialEvents(),
  filter: '',
  sort: { field: 'Location', desc: false},
  selectedEvent: null
}

export function reducer(state: State = initialState, action: All) {
  return reducerFn(state, action)
}

const reducerFn = function(state: State = initialState, action: All): State {
  if (action) {
    switch (action.type) {
      case FILTEREVENTS :
        return {...state, filter: action.payload }
      case SORTEVENTS :
        return {...state, sort: Object.assign({}, state.sort, action.payload)}
      case SELECTEVENT :
        return {...state, selectedEvent: action.payload}
     default:
        return state
    }
  }
  return state
}
