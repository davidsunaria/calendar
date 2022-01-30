
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import AddEvent from "./AddEvent.js"
import { useState } from 'react';

const localizer = momentLocalizer(moment);




function Appoitment() {


  const [showEvent, setShowEvent] = useState(false)
  const [year, setYear] = useState(null)
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(null)
  const [eventlist, setEventList] = useState([])

  console.log("eventlist", eventlist)

  const setNewEvent = (data) => {
    let oldEvent = [...eventlist]
    oldEvent.push(data)
    setEventList(oldEvent)
  }
  console.log("old", eventlist)
  const selectedSlot = ({ start, end }) => {
    console.log("e", start, end)
    setShowEvent(true)
  }


  const handleSelectEvent = (e) => {
    console.log("e", e)

  }





  return (
    <div className="App">
      <h1 className="text-info">React Big Calendar</h1><br /><br />
      <AddEvent toggle={showEvent} closeModal={setShowEvent} setEventList={setNewEvent} />
      <Calendar
        selectable
        style={{ height: 700 }}
        localizer={localizer}
        defaultView={Views.MONTH}
        events={eventlist}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        onSelectSlot={selectedSlot}
        step={5}
        timeslots={4}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default Appoitment;
