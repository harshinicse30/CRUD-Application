import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BasicExample(abc) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch('https://67d7ed259d5e3a10152c9cab.mockapi.io/Students/Details', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setTableData(tasks.reverse());
    }).catch(error => {
      console.log(error);
    })
  }, [abc.dataUpdate])
  // console.log(tableData);
  
  const deleteUser = (id) => {

    fetch(`https://67d7ed259d5e3a10152c9cab.mockapi.io/Students/Details/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("Delete Successfully...!")
      abc.setDataUpdate(!(abc.dataUpdate));
    }).catch(error => {
     console.log(error);
    })
  }

  
  return (
    <>
    <Button variant={"warning"} className='mb-3'  onClick={() => abc.boxshow()}>Add Data</Button>
    <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th className='p-4'>Sno</th>
          <th className='p-4'>Name</th>
          <th className='p-4'>EmailId</th>
          <th className='p-4'>PhoneNo</th>
          <th className='p-4'>Qualification</th>
          <th className='p-4'>Location</th>
          <th className='p-4'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((text, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td >{text.name}</td>
              <td>{text.emailId}</td>
              <td>{text.phoneNo}</td>
              <td>{text.qualification}</td>
              <td>{text.location}</td>
              <td><Button variant='success me-3' onClick={() => abc.boxshow(text)}>Edit</Button>
                <Button variant='danger' onClick={() => deleteUser(text.id)}>Delete</Button>
              </td>
            </tr>
          )
        })}
        {/* <td>1</td>
          <td >Lola Lind</td>
          <td>Aditya_Wuckert94@hotmail.com</td>
          <td>218-390-4429</td>
          <td>qualification 1</td>
          <td>Malden</td>
          <td><Button  variant='success me-3'>Edit</Button>
          <Button variant='danger'>Delete</Button>
          </td> */}

      </tbody>
    </Table>
    </>
  );
}

export default BasicExample;