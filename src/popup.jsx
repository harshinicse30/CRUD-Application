import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Popup(data) {
 console.log(data.fieldData,"###")
  const updateData=()=>{
    fetch(`https://67d7ed259d5e3a10152c9cab.mockapi.io/Students/Details/${data.fieldData.id}`, {
      method: 'PUT', // or PATCH
      headers: {'content-type':'application/json'},
      body: JSON.stringify(data.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("Changed Succesfully")
      data.setDataUpdate(!(data.dataUpdates));
    }).catch(error => {
      // handle error
    })
    data.modalclose();
  };
  const createUser=()=>{
    fetch('https://67d7ed259d5e3a10152c9cab.mockapi.io/Students/Details', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(data.fieldData)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("added Successfully");
      data.setDataUpdate(!(data.dataUpdates));
      // do something with the new task
    }).catch(error => {
      // handle error
    })
    data.modalclose();
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={data.modalshow} onHide={data.modalclose}>
        <Modal.Header closeButton>
          {data.fieldData.id?<Modal.Title>Edit Data</Modal.Title>:<Modal.Title>Add Data</Modal.Title>}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                defaultValue={data.fieldData.name}
                onChange={(e)=>data.setFieldData({...data.fieldData,name: e.target.value})}
               />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={data.fieldData.emailId}
                onChange={(e)=>data.setFieldData({...data.fieldData,emailId: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="tell"
                placeholder="phoneno"
                autoFocus
                defaultValue={data.fieldData.phoneNo}
                onChange={(e)=>data.setFieldData({...data.fieldData,phoneNo: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="qualification"
                autoFocus
                defaultValue={data.fieldData.qualification}
                onChange={(e)=>data.setFieldData({...data.fieldData,qualification: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="location"
                autoFocus
                defaultValue={data.fieldData.location}
                onChange={(e)=>data.setFieldData({...data.fieldData,location: e.target.value})}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={data.modalclose}>
            Close
          </Button>
          {data.fieldData.id?<Button variant="primary" onClick={updateData}>Save Changes</Button>:
          <Button variant="success" onClick={createUser}>
             Create
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;