import React, {useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import {RiMailCheckFill} from 'react-icons/ri'
import { CircularProgressbar } from 'react-circular-progressbar';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {ImDownload2} from 'react-icons/im'
import 'react-circular-progressbar/dist/styles.css';
import '../css/main.css';

export default function Main () {

    const [show, setShow] = useState(false);

    const toggleOpen = () => setShow(true);
    const toggleClose = () => setShow(false);

    return (
        <>
        <div>
            <Button onClick={toggleOpen} className="btn-1" >Tab 1</Button>
            <Button onClick={toggleClose} className="btn-1">Tab 2</Button>
        </div>
        <div className="col-3">
            <Card >
                <Card.Body className="cardbody">
                <Card.Title>
                        <CircularProgressbar styles={{text: {fill: '#000000'}, path: {stroke: '#5454ff'}}} strokeWidth={15} value={85} text={`${85}%`} />
                        </Card.Title>
                    <Card.Text className="cardtext"> 50/200 <br/> TYPE1 </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        <div className="col-3">
            <Card >
                <Card.Body className="cardbody">
                <Card.Title>
                        <RiMailCheckFill size={50} color="blue"/>
                        </Card.Title>
                    <Card.Text className="cardtext"> 1356 <br/> TYPE2 </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        
        {show ? 
        <><div className="col-3">
            <Card >
                <Card.Body className="cardbody">
                <Card.Title>
                        <AiOutlineFileSearch size={50} color="blue"/>
                        </Card.Title>
                    <Card.Text className="cardtext"> 1258 <br/> TYPE3 </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        <div className="col-3">
            <Card >
                <Card.Body className="cardbody">
                <Card.Title>
                        <ImDownload2 size={50} color="blue"/>
                        </Card.Title>
                    <Card.Text className="cardtext"> 534 <br/> TYPE4 </Card.Text>
                    
                </Card.Body>
            </Card>
        </div></> : 
        <></>}
        </>
    )
}