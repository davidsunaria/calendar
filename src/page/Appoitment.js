
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import { Button } from 'react-bootstrap'
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
  const [perDayEvent, setPerDayEvent] = useState([])
  const [demo, setDemo] = useState([])
  const [disableDate, setDisableDate] = useState(null)

  console.log("eventlist", eventlist)

  const setNewEvent = (data) => {
    let oldEvent = [...eventlist]
    let newdate = moment(data.start).format('L');
    perDayEvent.push(newdate)
    
    setPerDayEvent(perDayEvent)
    perDayEvent.forEach((value)=>{
       if(demo.length==0){
          demo.push(value)
          setDemo(demo)
       }
       else if (demo.length!==0){
         demo.forEach(val=>{
            if(value.value){
              console.log("gyuregyufe")
            }
         })
       }
    })
    oldEvent.push(data)
    setEventList(oldEvent)
  }
  console.log("old", eventlist)
  const selectedSlot = ({ start, end }) => {
    let daySelected = moment(start).format('L');
    
    let filterEvent = perDayEvent.filter((value) => {
      if (value == daySelected) {
        return daySelected
      }
    })
    console.log("filterEvent.length",filterEvent.length)
    if (filterEvent.length > 3) {
      setDisableDate(filterEvent[0])
    }
    console.log("filterevrnt", filterEvent[0])
    

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
