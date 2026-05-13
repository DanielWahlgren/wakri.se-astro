/**
 * Calendar Configuration
 *
 * Internal database of Calendar activities
 * Förslag på ikoner:
 * calendar-heart - https://lucide.dev/icons/calendar-heart
 * graduation-cap - https://lucide.dev/icons/graduation-cap
 * Alla ikoner från lucide är tillgängliga.
 */

export interface CalendarItem {
  title: string;
  icon: string;
  rsvp: Date;
  startDate: Date;
  endDate: Date;
  description: string[];
  price: string;
  order: number;
}

export const CalendarItems: CalendarItem[] = [
  { 
    title: 'Kurs i korgflätning', 
    icon: 'graduation-cap',
    rsvp: new Date('2026-04-7'), 
    startDate: new Date('2026-04-22'), 
    endDate: new Date('2026-04-23'), 
    description: ['2 x 8 timmar i Tullinge.','Material ingår.'],
    price: '1200 kr',
    order: 1,
  },
  { 
    title: 'Kurs i Knyppling', 
    icon: 'graduation-cap',
    rsvp: new Date('2026-05-1'), 
    startDate: new Date('2026-05-22'), 
    endDate: new Date('2026-05-23'), 
    description: ['2 x 8 timmar i Salem.','Material ingår.'],
    price: '1200 kr',
    order: 2,
  },
  { 
    title: 'Kurs i Tokeri', 
    icon: 'graduation-cap',
    rsvp: new Date('2026-05-2'), 
    startDate: new Date('2026-05-22'), 
    endDate: new Date('2026-05-23'), 
    description: ['2 x 8 timmar i Salem.', 'Vi kommer ha väldigt trevligt.','Material ingår.', 'Ta med gott humör.','Upp till 8 delatagare!'],
    price: '1200 kr',
    order: 3,
  },
  { 
    title: 'Påskmarknad - Salem Centrum', 
    icon: 'calendar-heart',
    rsvp: new Date('2026-05-2'), 
    startDate: new Date('2026-05-22'), 
    endDate: new Date('2026-05-23'), 
    description: ['Vi ställer upp bord i det gemensamma utrymmet i Salems Centrums galleria!','Vår påskmarknad uppskattas av salemborna som en aktivitet som gör att Salems Centrum livas upp!'],
    price: '5 %',
    order: 1,
  },
  { 
    title: 'ÅRSMÖTE', 
    icon: 'calendar-heart',
    rsvp: new Date('2026-05-2'), 
    startDate: new Date('2026-05-22'), 
    endDate: new Date('2026-05-22'), 
    description: ['Årsmötet sker i år i Tullinge.','Motioner skall vara inlämnade senast 10 mars.'],
    price: '',
    order: 3,
  },
  { 
    title: 'Skansen v30', 
    icon: 'calendar-heart',
    rsvp: new Date('2026-06-20'), 
    startDate: new Date('2026-07-20'), 
    endDate: new Date('2026-07-26'), 
    description: ['Vi finns i en bod på Skansen runt vecka 30. Mer information kommer!'],
    price: '5 %',
    order: 3,
  },
  { 
    title: 'Höstmarknad', 
    icon: 'calendar-search',
    rsvp: new Date('2026-05-2'), 
    startDate: new Date('2026-05-22'), 
    endDate: new Date('2026-05-23'), 
    description: ['Vi tänker oss ett par höstmarknader, mer information kommer!'],
    price: '5 %',
    order: 3,
  },
  { 
    title: 'Julmarknad - Uställarmöte', 
    icon: 'candy-cane',
    rsvp: new Date('2026-11-1'), 
    startDate: new Date('2026-11-06'), 
    endDate: new Date('2026-11-06'), 
    description: ['Utställarmöte för slöjdare om julmarknaden.','Lilla Murgrönan 18:00'],
    price: '5 %',
    order: 3,
  },
  { 
    title: 'Julmarknad - Hågelby Gård', 
    icon: 'dessert',
    rsvp: new Date('2026-11-1'), 
    startDate: new Date('2026-11-21'), 
    endDate: new Date('2026-11-22'), 
    description: ['Stora Julmarknaden på Hågelby Gård 10:00 - 16:00'],
    price: '5 %',
    order: 3,
  },
  { 
    title: 'Julmarknad - Rönninge Folkets Hus', 
    icon: 'dessert',
    rsvp: new Date('2026-11-20'), 
    startDate: new Date('2026-12-05'), 
    endDate: new Date('2026-12-05'), 
    description: ['Julmarknad i Rönninge Folkets hus 10:00 - 16:00'],
    price: '5 %',
    order: 3,
  },
];

/**
 * Get Calendar items sorted by order
 */
export function getCalendarItems(): CalendarItem[] {
  return [...CalendarItems].filter((activity: any) => activity.endDate.valueOf() >= new Date()).sort((a, b) => a.startDate.valueOf() - b.startDate.valueOf() || a.order - b.order);
}
