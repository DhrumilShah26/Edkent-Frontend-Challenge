import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import AccordionDrop from './components/Accordion'
import Main from './components/Main'
import LineChart from './components/Chart'

function App() {
  return (
    <div className="row">
      <div className="col-2">
        <SideBar/>
      </div>
      
      <div className="col-10 App">
        <div className="row ">
          <Header/>
        </div>
        <div className="row">
          <AccordionDrop/>
        </div>
        <div className="row">
          <Main/>
        </div>
        <div className="row back">
          <LineChart/>
        </div>

      </div>      
    </div>
  );
}

export default App;
