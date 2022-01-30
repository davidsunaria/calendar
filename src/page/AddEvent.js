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
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} onSelect={handleDateSelect} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>End Date</Form.Label>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} onSelect={handleDateSelect} />
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
