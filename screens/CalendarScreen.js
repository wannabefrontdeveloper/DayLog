import {format} from 'date-fns';
import React, {useContext} from 'react';
import CalendarView from '../components/CalendarView';
import LogContext from '../contexts/LogContext';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});
  return <CalendarView markedDates={markedDates} />;
}

export default CalendarScreen;
