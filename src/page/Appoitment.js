
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
import AddEvent from "./AddEvent.js"
import { useState } from 'react';

const localizer = momentLocalizer(moment);




function Appoitment() {


  const [showEvent, setShowEvent] = useState(false)

  const selectedSlot = ({start,end})=>{
    console.log("e",start,end)
    setShowEvent(true)
    }
    
    
    const handleSelectEvent = (e)=>{
      console.log("e",e)
      
      }
    
     
    
    let eventlist= [
      {
        title: "demo",
        start: new Date(2022, 0, 29),
        end: new Date(2022, 0, 32),
      },
      {
        title: "demo2",
        start: new Date(2022, 1, 3),
        end: new Date(2022, 1, 9),
      }
    
    ] 


  return (
    <div className="App">
     <h1 className="text-info">React Big Calendar</h1><br/><br/>
         <AddEvent toggle={showEvent} closeModal={setShowEvent}/> 
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
