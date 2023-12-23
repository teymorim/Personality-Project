import './Resume.css'
import {motion} from 'framer-motion'
import { Container , Row , Col } from 'react-bootstrap';
import MyNavbar from '../../Components/Navbar/MyNavbar';
import Sumary from '../../Components/RsumeComponent/Sumary/Sumary';
import ProfessionalExperience from '../../Components/RsumeComponent/ProfessionalExperience/ProfessionalExperience';
import Education from '../../Components/RsumeComponent/Education/Education';

function Resume(){
    return(
        <>
        
        <motion.div className="about" initial={{ opacity:0 , y:150  }}
        animate={{ opacity:1 , y:0  }}
        transition={{ duration: 0.4, delay: 0.1 }}>
            <Container fluid style={{backgroundColor: 'rgb(0, 0, 0 , 0.7)'}}>
                <Container>
                <div className="about-haeder mb-3 px-2  py-3 d-flex justify-content-between">
                    <h1>Emily Jones</h1>
                    <MyNavbar />
                </div>
                </Container>
            </Container>

            <Container className='resum-container'>
            <p className="opacity-75">RESUME<span className="greenColor fs-5">_______</span></p>
            <h1 className='mb-4'>CHECK MY RESUME</h1>
            <Row className='row-cols-1 row-cols-md-2 gy-3'>
                <Col>
                    <Sumary />
                    <Education />
                </Col>
                
                <Col>
                    <ProfessionalExperience />
                </Col>
                
            </Row>
            </Container>

            </ motion.div>
        </>
    )
}
export default Resume ;