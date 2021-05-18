import Chart from "react-google-charts";
import {Card} from "react-bootstrap"
import Calendar from "./Calendar"
import '../css/chart.css'

const data = [
  ["Year", "Type1", "Type2", "Type3"],
  ["Dec10", 0.12, 0.15, 0.14],
  ["Dec11", 0.2, 0.22, 0.17],
  ["Dec12", 0.33, 0.3, 0.25],
  ["Dec13", 0.4, 0.42, 0.44],
  ["Dec14", 0.5, 0.55, 0.66],
  ["Dec15", 0.56, 0.65, 0.77],
  ["Dec16", 0.7, 0.78, 0.82],
  ["Dec17", 0.8, 0.82, 0.9]
];
const options = {
  
  curveType: "function",
  legend: { position: "top" },
  colors: ["#2569E6", "#FA6457", "#8466F2"] 
};

export default function LineChart (){
  
    return (
      <div>
        <div className="row mt-3">
          <div className="col-2">
            <p className="analytics">Analytics</p>
          </div>
          <div className="col-4">
            <Calendar/>
          </div>
          <div className="col-6">
            <Card>
              <Card.Body>
              
                <Card.Text>
                  <div className="row">
                    <div className="col-3 vl"> Heading1 <br/> 24,350</div>
                    <div className="col-3 vl">Heading2 <br/> 12,360</div>
                    <div className="col-3 vl">Heading3 <br/> 10,671</div>
                    <div className="col-3">Heading4 <br/> 6,562</div>
                  </div>
                </Card.Text>
                  
              </Card.Body>
            </Card>
          </div>
          
          
        </div>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  }