import { 
  Box, 
  SpeedDial 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCalendarStore } from '../../hooks/useCalendarStore';

export const DeleteFloatButton = () => {

  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = () =>{
    startDeletingEvent();
  }

  return (
    <Box
      sx={{
        width: 60,
        height: 150, 
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'fixed',
        left: 50,
        bottom: 20,
        display: hasEventSelected ? '' : 'none',
        
      }}
    >
      <SpeedDial
        ariaLabel="Delete Event"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 2,
        }}
        icon={<DeleteIcon />}
        onClick={ handleDelete }
        FabProps={{
          sx: {
            bgcolor: '#ff2f41',
            '&:hover': {
              bgcolor: '#ae101e',
            },
            color: '#ffffff',
          }
        }}
      />
    </Box>
  )
}
