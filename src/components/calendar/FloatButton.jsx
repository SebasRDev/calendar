import { 
  Box, 
  SpeedDial,
  SpeedDialAction 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addHours } from 'date-fns';
import EventIcon from '@mui/icons-material/Event';

import { useCalendarStore, useUiStore } from '../../hooks';

const actions = [
  { icon: <AddIcon />, name: 'Add Event' },
]

export const FloatButton = () => {

  const {openDateModal} = useUiStore();
  const { setActiveEvent } = useCalendarStore();


  const handleActionsEvents = () => {
    setActiveEvent({
      title: '',
      description: '',
      start:  new Date(),
      end: addHours( new Date(), 1),
      user:{
        _id: '123',
        name: 'Sebastian'
      }
    })
    openDateModal();
    console.log('click Add new event')
  }

  return (
    <Box
      sx={{
        width: 60,
        height: 150, 
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        right: 20,
        bottom: 20,
        
      }}
    >
      <SpeedDial
        ariaLabel="Add new event"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 2
        }}
        icon={<EventIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction 
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleActionsEvents}
          />
        ))}
      </SpeedDial>
    </Box>
  )
}
