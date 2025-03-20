import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './table';
import { Container } from 'react-bootstrap';
import Popup from './popup';

function App() {
  const [show, setShow] = useState(false);
  const [update, setUpdate]=useState(false);
  const [tempData, setTempData]=useState({})
  const handleClose = () => setShow(false);
  const handleShow = (tableData)=>{
    if(tableData){
    setTempData(tableData);
    }else{
    setTempData({name:null,
    emailId:null,
    phoneNo:null,
    qualification:null,
    location:null})
    }
    setShow(true)};
  return (
    <>
    <Container fluid className='p-4'>
      <Popup modalshow={show} modalclose={handleClose} fieldData={tempData} setFieldData={setTempData}  dataUpdates={update} setDataUpdate={setUpdate}/>
      <BasicExample boxshow={handleShow} dataUpdate={update} setDataUpdate={setUpdate}/>
     
      </Container>
    </>
  )
}

export default App
