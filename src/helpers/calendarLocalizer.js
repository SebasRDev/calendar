import { dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS, es, frCA } from 'date-fns/locale'

const locales = {
  'en': enUS,
  'es': es,
  'fr': frCA
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
