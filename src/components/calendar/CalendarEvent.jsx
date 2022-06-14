import React from 'react'

export const CalendarEvent = (props) => {

  console.log(props)
  const {title, user} = props.event;

  return (
    <>
      <strong>{ title }</strong>
      <strong> - { user.name }</strong>
    </>
  )
}
