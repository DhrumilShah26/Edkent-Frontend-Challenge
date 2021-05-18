import React from 'react'
import { Button, ProgressBar } from "react-bootstrap"
import { BsFillInfoCircleFill, BsFillInfoSquareFill, BsFillBookmarkFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { FaUserAlt, FaHandshake } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import {GrLogout} from 'react-icons/gr'
import Popup from 'reactjs-popup';
import '../css/header.css'

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <i className="icon"><RiArrowDropDownLine/></i>
                
                <Popup
                    trigger={<span>Jason Statham</span>}
                    position="bottom"
                    nested 
                >
                    <i className="icon"><FaHandshake/></i><span>Menu 1</span><hr/>
                    <i className="icon"><FaHandshake/></i><span>Menu 2</span><hr/>
                    <i className="icon"><FaHandshake/></i><span>Menu 3</span><hr/>
                    <span className="progressbar">Leoram Ipsam (1050/2000)
                    <ProgressBar now={50}/><hr/></span>
                    <i className="icon"><GrLogout/></i><span>Logout</span>
                </Popup>

                <i className="icon"><FaUserAlt/></i>
                
                <Popup
                    trigger={<i className="icon"><BsBellFill/></i>}
                    position="bottom"
                    nested 
                >
                   
                    <i className="icon"><BsFillInfoSquareFill/></i><span>Lorem ipsum is simply dummy text of printing and typesetting industry <br/>
                    5 Dec 2020 </span><hr/>
                    <i className="icon"><BsFillInfoSquareFill/></i><span>Lorem ipsum is simply dummy text of printing and typesetting industry <br/>
                    5 Dec 2020 </span><hr/>
                    <i className="icon"><BsFillInfoSquareFill/></i><span>Lorem ipsum is simply dummy text of printing and typesetting industry <br/>
                    5 Dec 2020 </span>
                    
                    
                </Popup>
                
                <Popup
                    trigger={<i className="icon"><BsFillInfoCircleFill/></i>}
                    position="bottom"
                    nested 
                >
                    <i className="icon"><BsFillBookmarkFill/></i><span>Menu Option 1</span><hr/>
                    <i className="icon"><BsFillBookmarkFill/></i><span>Menu Option 2</span> <br/><br/>
                    <span className="resources">Resources</span> <br/><br/>
                    <i className="icon"><BsFillBookmarkFill/></i><span>Menu Option 3</span><hr/>
                    <i className="icon"><BsFillBookmarkFill/></i><span>Menu Option 4</span>
                </Popup>
                
                <Button className="button">Button1</Button>
            </div>
        )
    }
}

export default Header