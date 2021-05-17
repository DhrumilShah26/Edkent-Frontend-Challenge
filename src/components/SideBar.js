import React, { Component} from 'react'

import {CgMenuBoxed} from 'react-icons/cg'
import '../css/sidebar.css'


class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heading : ["Heading 1", "Heading 2", "Heading 3", "Heading 4"],
            menu : {
                "Heading 1" : ["Menu Option 1", "Menu Option 2", "Menu Option 3"], 
                "Heading 2" : ["Menu Option 4", "Menu Option 5"],
                "Heading 3" : ["Menu Option 6", "Menu Option 7"], 
                "Heading 4" : ["Menu Option 8", "Menu Option 9"]
            }
        }
    }

    render () {
    return (
        <div className="App-sidebar ">
            <div className="logo">LOGO<hr className="hr"/></div>

            {this.state.heading.map((heading, index) => (
                
                <div className="headings">
                    <h5>{heading}</h5>
                    {this.state.menu[heading].map((menu) => (
                        <div className="menu">
                            <p><CgMenuBoxed/> {menu}</p>
                        </div>
                    ))}
                </div>
            ))}
            <div className="logout"> Logout</div>
        </div>

        
    )
            }
}

export default SideBar;