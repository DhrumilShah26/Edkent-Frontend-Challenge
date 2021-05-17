import React, {useState} from 'react'
import {Accordion, Card} from 'react-bootstrap';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import {HiCode} from 'react-icons/hi';
import {DiReact} from 'react-icons/di'
import {GrDocumentCsv} from 'react-icons/gr'

import '../css/accordion.css'

export default function AccordionDrop (props) {

    const [show, setShow] = useState(false);

    const toggleClick = () => setShow(!show);

    const str = "Lorem lpsum is Simply Dummy Text"
    const subStr = "Lorem lpsum is simply dummy text of printing..."

    const element = <>
      <ol>
        <li><div style={{color: "black"}}>{str} </div><div style={{color: "gray"}}>{subStr}</div></li>
        <li><div style={{color: "black"}}>{str} </div><div style={{color: "gray"}}>{subStr}</div></li>
        <li><div style={{color: "black"}}>{str} </div><div style={{color: "gray"}}>{subStr}</div></li>
        <li><div style={{color: "black"}}>{str} </div><div style={{color: "gray"}}>{subStr}</div></li>
        <li><div style={{color: "black"}}>{str} </div><div style={{color: "gray"}}>{subStr}</div></li>
      </ol>
    </>

    return(
        <Accordion className="accordion" defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0" onClick={toggleClick}>
            Lorem lpsum

            <span className="droparrow">{show? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <div className="row">
                <div className="col-4 vline">
                    <h5><i classname="icons"><HiCode color="blue"/></i> Lorem lpsum is Simply Dummy Text</h5>
                    {element}
                </div>
                <div className="col-4 vline">
                  <h5><i classname="icons"><DiReact color="blue"/></i> Lorem lpsum is Simply Dummy Text</h5>
                    {element}
                </div>
                <div className="col-4">
                  <h5><i classname="icons"><GrDocumentCsv color="blue"/></i> Lorem lpsum is Simply Dummy Text</h5>
                    {element}
                </div>
                </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
      </Accordion>
    )
}