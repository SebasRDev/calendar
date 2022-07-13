import React, { useEffect, useMemo, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import SaveIcon from '@mui/icons-material/Save';
import { addHours, differenceInSeconds } from 'date-fns';
import { es } from 'date-fns/esm/locale';
import { useSnackbar } from 'notistack';

import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarModal = () => {

  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { activeEvent, startSavingEvent } = useCalendarStore();

  const { enqueueSnackbar } = useSnackbar();
  const [formSubmitted, setformSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    title: 'cumple',
    description: 'papi',
    start: new Date(),
    end: addHours(new Date(), 1)
  });

  const titleValid = useMemo(() => {
    if(!formSubmitted) return false;
    return(formValues.title.length > 0)
      ? false
      : true
  }, 
  [formValues.title, formSubmitted])

  useEffect(() => {
    if(activeEvent !== null){
      setFormValues({
        ...activeEvent
      })
    }
  
  }, [activeEvent])
  

  const onInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChange = (newVal, changing) =>{
    setFormValues({
      ...formValues,
      [changing]: newVal
    })
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    setformSubmitted(true);
    const difference = differenceInSeconds(formValues.end, formValues.start);

    if( isNaN(difference) ){
      enqueueSnackbar('Las fechas no pueden estar vacias',{
        variant: 'error',
        autoHideDuration: 3000
      });
      return;
    }

    if(difference <= 0){
      enqueueSnackbar('La fecha de finalización no puede ser antes que la fecha de inicio del evento',{
        variant: 'warning',
        autoHideDuration: 3000
      });
      return;
    }

    if(formValues.title.length <= 0){
      enqueueSnackbar('El evento necesita un titulo para poderse guardar',{
        variant: 'warning',
        autoHideDuration: 3000
      });
      return;
    }

    await startSavingEvent(formValues)
    closeDateModal();
    enqueueSnackbar('Evento guardado con exito',{
      variant: 'success',
      autoHideDuration: 3000
    });
  }

  const handleCloseModal = () => {
    closeDateModal();
    setformSubmitted(false);
  }
  
  return (
    <Dialog open={isDateModalOpen} onClose={handleCloseModal}>
      <DialogTitle>Nuevo evento</DialogTitle>
      <DialogContent>
        <DialogContentText>
          A continuación agregue la información necesaria para crear un evento
        </DialogContentText>
        <form onSubmit={handleSubmit}>
          <Stack 
            spacing={2}
            mt={2}
          >
            <TextField
              error={titleValid}
              label="Titulo del evento"
              variant="outlined"
              fullWidth
              value={formValues.title}
              onChange={onInputChange}
              name="title"
            />
            <TextField
              variant="outlined"
              multiline
              fullWidth
              label="Descripción del evento"
              rows={4}
              value={formValues.description}
              onChange={onInputChange}
              name="description"
            />
            <LocalizationProvider 
              adapterLocale={es}
              dateAdapter={AdapterDateFns}
            >
              <Stack 
                direction="row" 
                justifyContent="space-between" 
                spacing={2}
              >
                <DateTimePicker
                  label="Fecha y hora de inicio"
                  value={formValues.start}
                  onChange={(event) => onDateChange(event, 'start')}
                  renderInput={(params) => <TextField {...params} />}
                  disablePast
                />
                <DateTimePicker
                  label="Fecha y hora de finalización"
                  value={formValues.end}
                  onChange={(event) => onDateChange(event, 'end')}
                  renderInput={(params) => <TextField {...params}/>}
                  disablePast
                />
              </Stack>
            </LocalizationProvider>
          </Stack>
          
          <DialogActions>      
            <Button
              type="submit"
              variant="outlined"
              color="error"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  )
}
