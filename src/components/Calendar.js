import React from 'react';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import {Card} from 'react-bootstrap'
import moment from "moment"
import {AiOutlineCalendar} from "react-icons/ai"

export default class Calendar extends React.Component {

    constructor(props){
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        this.state = {
            start : start,
            end : end
        }

        this.applyCallback = this.applyCallback.bind(this);
    }

    applyCallback(startDate, endDate){
        this.setState({
                start: startDate,
                end : endDate
            }
        )
    }

    render(){
            let now = new Date();
            let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0,0));
            let end = moment(start).add(1, "days").subtract(1, "seconds");
            let ranges = {
                "Today": [moment(start), moment(end)],
                "Yesterday": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
                "Last 7 Days": [moment(start).subtract(7, "days"), moment(end)],
                "Last week": [moment(start).subtract(7, "days"), moment(end)],
                "Last 2 week": [moment(start).subtract(14, "days"), moment(end)],
                "This Month": [moment(start).subtract(now.getDate(), "days"), moment(end)],
                "Last Month": [moment(start).subtract(7, "days"), moment(end)]
            }
            let local = {
                "format":"DD-MM-YYYY HH:mm",
                "sundayFirst" : false
            }

            return(
                <div>
                    <DateTimeRangeContainer 
                        ranges={ranges}
                        start={this.state.start}
                        end={this.state.end}
                        local={local}
                        
                        applyCallback={this.applyCallback}
                    >    
                        <Card >
                    <Card.Body>
                        <Card.Text className="calendar-text"> Sept20, 2020 - Jan15, 2020  
                            <i className="calendar-icon"><AiOutlineCalendar size={20}/></i></Card.Text>    
                    </Card.Body>
                        </Card>
                    </DateTimeRangeContainer>
                </div>
            );
        }
}