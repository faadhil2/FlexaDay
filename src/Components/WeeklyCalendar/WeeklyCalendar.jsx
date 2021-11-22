import React from "react";
// import classNames from "classnames";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import Button from "react-bootstrap/Button";
// import "src/Components/WeeklyCalendar/WeeklyCalendar.css";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).map((k) => Views[k]);

export default function WeeklyCalendar(props) {
  const { exercise } = props;

  const handleCalendarChange = (event) => {
    console.log(event);
  };

  const bodyparts = [
    "Back",
    "Cardio",
    "Chest",
    "Lower arms",
    "Lower legs",
    "Neck",
    "Shoulders",
    "Upper arms",
    "Upper legs",
    "Waist",
  ];

  let events = [
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: `${exercise}`,
      // allDay?: boolean
      // resource?: any,
    },
  ];

  const calendarList = bodyparts.map((bodypart, index) => (
    <div key={index}>
      <div className="bodypart">
        <h1>{bodypart}</h1>
      </div>
      <Calendar
        localizer={localizer}
        views={["week"]}
        step={720}
        timeslots={1}
        popup={true}
        defaultDate={new Date()}
        defaultView="week"
        events={events}
        style={{ height: "25vh" }}
        selectable={true}
        onSelectEvent={(e) => console.log(e)}
        onDoubleClickEvent={(e) => console.log(e)}
        getDrilldownView={(e) => console.log(e)}
      />
    </div>
  ));

  return <div className="App">{calendarList}</div>;
}
