
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

const localizer = momentLocalizer(moment);


const selectedSlot = ({start,end})=>{
console.log("e",start,end)
}



let eventlist= [
  {
    title: "demo",
    allDay:true,
    start: new Date(2022, 0, 29),
    end: new Date(2022, 0, 32),
  },
  {
    title: "demo2",
    allDay:true,
    start: new Date(2022, 1, 3),
    end: new Date(2022, 1, 9),
  }

] 

function Appoitment() {
  return (
    <div className="App">
     <h1 className="text-info">React Big Calendar</h1>
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