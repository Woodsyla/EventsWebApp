export class EventItem {
  Title: string
  Description: string
  Location: string
  Date: Date
}

export const initialEvents = (): EventItem[] => {
  return [
    { Title: 'Summer event', Description: 'Ucas Summer Event', Location: 'Rear lawn Rosehill', Date: new Date(2017, 6, 21, 17)},
    { Title: 'Christmas event', Description: 'Ucas Xmas Event', Location: 'Racecourse', Date: new Date(2017, 11, 16, 19, 30)},
    { Title: 'All staff event', Description: 'Ucas All Staff Event', Location: 'Rear lawn Rosehill', Date: new Date(2017, 9, 16, 14, 30)},
    { Title: 'A level results day', Description: 'A level results day', Location: 'England', Date: new Date(2017, 7, 21, 6)},
    { Title: 'Scottish A level results day', Description: 'Scottish A level results day', Location: 'Scotland', Date: new Date(2017, 7, 7, 6)}
  ]
}
