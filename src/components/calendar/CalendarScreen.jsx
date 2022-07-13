import React, { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { NavBar } from '../shared/navBar/NavBar'
import { localizer, getMessagesEs } from '../../helpers'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'
import { useCalendarStore, useUiStore } from '../../hooks'
import { FloatButton } from './FloatButton'
import { DeleteFloatButton } from './DeleteFloatButton'

export const CalendarScreen = () => {
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent } = useCalendarStore()

  const onDoubleClick = () => {
    openDateModal();
  }
  const onSelect = (event) => {
    setActiveEvent( event )
  }
  
  const onViewChanged = (event) =>{
    localStorage.setItem('lastView', event);
  }
  
  const eventPropGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
  
    return {
      style
    }
  }

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month')

  return (
    <div className='calendar__screen'>
      <NavBar />
      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        messages={getMessagesEs()}
        eventPropGetter={eventPropGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />
      <CalendarModal />
      <FloatButton />
      <DeleteFloatButton />
    </div>
  )
}
