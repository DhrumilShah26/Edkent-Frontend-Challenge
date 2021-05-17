import React from 'react'
import { Button } from "react-bootstrap"
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import '../css/header.css'

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <i className="icon"><RiArrowDropDownLine/></i>
                <span>Jason Statham</span>
                <i className="icon"><FaUserAlt/></i>
                <i className="icon"><BsBellFill/></i>
                <i className="icon"><BsFillInfoCircleFill/></i>
                <Button className="button">Button1</Button>
            </div>
        )
    }
}

export default Header