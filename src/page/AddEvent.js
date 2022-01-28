import React, { useState } from "react";
import { Card, Button, ListGroup, Modal, Form } from 'react-bootstrap'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddEvent(props) {

  const [eventDetail, setEvent] = useState({
   
  });

  const handleClose = () => props.closeModal(false);


  const onchangehander = (event) => {
    setEvent(
      {
          ...eventDetail, [event.target.name]: event.target.value
      }
  )
  }

  function submit(event) {
    event.preventDefault()
    console.log("event",event)
    props.setEventList(eventDetail)
  
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
              
              <Form.Control type="text" name="title" placeholder="Enter Title" value={eventDetail.title} onChange={onchangehander}/> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="text" placeholder="8/10/22" name="start" value={eventDetail.start} onChange={onchangehander}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="text" placeholder="9/10/22" name="end" value={eventDetail.end} onChange={onchangehander}/>
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
