
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { Button } from 'react-bootstrap'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import AddEvent from "./AddEvent.js"
import { useEffect, useState } from 'react';

const localizer = momentLocalizer(moment);




function Appoitment() {


  const [showEvent, setShowEvent] = useState(false)
  const [eventlist, setEventList] = useState([])
  const [perDayEvent, setPerDayEvent] = useState([])
  const [disableDate, setDisableDate] = useState([])
  const [finaldisable, setFinalDisable] = useState([])

  console.log("eventlist", eventlist)

  const setNewEvent = (data) => {
    let oldEvent = [...eventlist]
    let newdate = moment(data.start).format('L');
    perDayEvent.push(newdate)
    setPerDayEvent(perDayEvent)
    const counts = {};
    perDayEvent.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    console.log("counts", counts)
    const tempdisable = [...disableDate]
    for (const property in counts) {
      if (counts[property] < 4) {
        oldEvent.push(data)
        setEventList(oldEvent)
      }
      else {
        console.log("cent add",property)
         tempdisable.push(property)
         setDisableDate(tempdisable)
      }

    }

  }

  // useEffect(() => {
  //   if (disableDate.length !== 0) {
  //     const counts = {};
  //     disableDate.forEach((x) => {
  //       counts[x] = (counts[x] || 0) + 1;
  //     });
  //     console.log("new count",counts)
  //      for (const property in counts) {
  //        if (counts[property] > 3) {
  //          finaldisable.push(property)
  //          setFinalDisable(finaldisable)
  //        }
  //        else {
  //          console.log("disable date")
  //        }
  
  //      }
  //   }
  // }, [disableDate])

  console.log("old", eventlist)
  const selectedSlot = ({ start, end }) => {
    let daySelected = moment(start).format('L');
  }

  console.log("perday", perDayEvent)
  console.log("disableDate", disableDate)






  return (
    <div className="App">
      <h1 className="text-info">React Big Calendar</h1><br /><br />
      <Button variant="primary" onClick={() => setShowEvent(true)}>Create Event</Button><br /><br /><br />
      <AddEvent toggle={showEvent} closeModal={setShowEvent} setEventList={setNewEvent} disableDate={disableDate} />
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
      />
    </div>
  );
}

export default Appoitment;
