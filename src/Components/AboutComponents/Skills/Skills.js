import {Col} from  "react-bootstrap";
import CountUp from 'react-countup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skills.css'

function Skills ({name , percent}){
   
    return(
        <>
            <Col>
                        <div className="d-flex justify-content-between">
                        <p className="fw-bold">{name}</p>
                        <p className="fw-bold">{percent}%</p>
                        </div>
                         <ProgressBar  now={percent} className= 'mb-3 ' />     
            </Col>
        </>
    )
}
export default Skills ;