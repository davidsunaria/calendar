import React, { useState } from "react";
import { Card, Button, ListGroup, Modal, Form } from 'react-bootstrap'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddEvent(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [eventName, setEventName] = useState(""

  );

  const handleClose = () => props.closeModal(false);


  const onchangehander = (event) => {
    setEventName(

      event.target.value

    )
  }

  function submit(event) {
    event.preventDefault()
    console.log("event", event)
    props.setEventList({
      title: eventName,
      start: startDate,
      end: endDate,
    })
    props.closeModal(false)
  }

  const handleDateSelect = (e) => {
    console.log(e)
  }
  console.log("props", props.disableDate)
  if (props.disableDate && props.disableDate.length > 0) {
    console.log("disav")
  }
  else {
    console.log("undefined")
  }

  // const hello = (date) => {
  //   if (props.disableDate && props.disableDate.length > 0) {
  //     props.disableDate.map((val) => {
  //       let text = val.toString();
  //       if (date.getTime() === new Date(text).getTime()) {
  //         return "disabled-date"
  //       }
  //     })
  //   }
  //   else {
  //     return undefined
  //   }
  // }

  let arr = ["02/02/2022","02/08/2022","02/08/2022","02/08/2022"]
  // const hello = (date) => {
  //   let demo = null
  //   arr.forEach((val) => {
  //     let text = val.toString();
  //     if (date.getTime() === new Date(text).getTime()) {
  //       demo ="disabled-date"
  //     }
  //     else {
  //       demo = undefined
  //     }
  //   })
  //   console.log("newdemo",demo)
  //   return demo

  // }

  const hello = () => {
    let demo = null
    arr.forEach((val) => {
      demo=val
    })
    console.log("demo",demo)
    return demo

  }
  return (
    <>
      <Modal
        show={props.toggle}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>

              <Form.Control type="text" name="title" placeholder="Enter Title" value={eventName} onChange={onchangehander} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Start Date</Form.Label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} onSelect={handleDateSelect}
              //  dayClassName={date => date.getTime() === new Date("02/08/2022").getTime() ?  'disabled-date' : undefined}
                dayClassName={ hello }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>End Date</Form.Label>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} onSelect={handleDateSelect}
                dayClassName={date => date.getTime() === new Date("02/06/2022").getTime() ? 'disabled-date' : undefined} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
           </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddEvent;
