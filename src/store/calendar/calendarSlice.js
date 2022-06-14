import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: '',
  description: '',
  start:  new Date(),
  end: addHours( new Date(), 1),
  user:{
    name: 'Sebastian'
  }
}

export const calendarSlice = createSlice({
 name: 'calendar',
 initialState: {
   events: [
     tempEvent
   ],
   activeEvent: null
 },
 reducers: {
   onSetActiveEvent: (state, {payload})=>{
     state.activeEvent = payload
   }
 }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = calendarSlice.actions;