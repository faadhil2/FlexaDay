import React from "react";
// import classNames from "classnames";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Button from "react-bootstrap/Button";
// import "src/Components/WeeklyCalendar/WeeklyCalendar.css";

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export default function WeeklyCalendar(props) {
  const {} = props;
  
  return (
    <div>
      <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  );
}
