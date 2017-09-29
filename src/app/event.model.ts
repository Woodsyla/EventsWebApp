export class Event {
  Title: string
  Description: string
  Location: string
  Date: Date
  }
}

export const initialEvents = (): Event[] => {
  return [
    { Title: 'Summer event', Description: 'Ucas Summer Event', Location: 'Rear lawn Rosehill', Date: new Date('21/07/2017 17:00')},
    { Title: 'Christmas event', Description: 'Ucas Xmas Event', Location: 'Racecourse', Date: new Date('16/12/2017 19:30')},
    { Title: 'All staff event', Description: 'Ucas All Staff Event', Location: 'Rear lawn Rosehill', Date: new Date('16/10/2017 14:30')},
  ]
}
