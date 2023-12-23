import {motion} from 'framer-motion'
import { Container , Row , Col } from 'react-bootstrap';
import MyNavbar from '../../Components/Navbar/MyNavbar';
import './Contact.css'

import { MdNotListedLocation } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { IoShareSocial } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { FaFacebook , FaLinkedin  } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


function Contact(){
    return(
        <>
        <motion.div className="services " initial={{ opacity:0 , y:150  }}
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

            <Container className='contact-container mb-5 pb-5'>
            <p className="opacity-75">CONTACT<span className="greenColor fs-5">_______</span></p>
            <h1 className='mb-4'>CONTACT ME</h1>
            
          
            <Row className="p-4 row-cols-1 ">
              <Col className='contact-item' >
               <div className='d-flex align-items-center justify-content-start'>
               <p className='pe-3'>
                  <MdNotListedLocation size={"25px"} style={{color: 'rgb(6, 212, 6)'}}  />
                </p>
                <h2 className="fs-4">My Address</h2>
               </div>
                <span className='ps-5'>A108 Adam Street, New York, NY 535022</span>
              </Col>
            
                <Col className='contact-item' >
                <div className='d-flex align-items-center justify-content-start'> 
                    <p className='pe-3'>
                    <AiOutlineMail size={"25px"}  style={{color: 'rgb(6, 212, 6)' }} />
                    </p>
                    <h2 className="fs-4">Email Me</h2>
                </div>
                    <span className='ps-5'>info@example.com</span>
                </Col>
                <Col className='contact-item' >
                <div className='d-flex align-items-center justify-content-start'>
                    <p className='pe-3'>
                    <IoCall size={"25px"} style={{color: 'rgb(6, 212, 6)'}} />
                    </p>
                    <h2 className="fs-4">Call Me</h2>
                </div>   
                    <span className='ps-5'>+1 5589 55488 55</span>
                </Col>

                <Col className='contact-item' >
                <div className='d-flex align-items-center justify-content-start'>
                    <p className='pe-3'>
                    <IoShareSocial size={"25px"} style={{color: 'rgb(6, 212, 6)'}} />
                    </p>
                    <h2 className="fs-4">Social Profiles</h2>
                </div>   
                    <span className='ps-5'>
                        <SiInstagram size={28} className='pe-2 social-icon' />
                        <FaFacebook size={28} className='pe-2 social-icon' />
                        <FaTwitter size={28} className='pe-2 social-icon' />
                        <FaLinkedin size={28} className='pe-2 social-icon' />
                    </span>
                </Col>
            
            </Row>
            
            
            </Container>
            </motion.div>
        </>
    )
}
export default Contact ;