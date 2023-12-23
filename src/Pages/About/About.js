import { Container , Row , Col } from "react-bootstrap";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import './About.css'
import imgAbout from '../../Assets/images/me.jpg'
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules' ;
import 'swiper/css';
import 'swiper/css/pagination' ;

import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { PiMedalLight } from "react-icons/pi";
import Skills from "../../Components/AboutComponents/Skills/Skills";
import Testimonials from "../../Components/AboutComponents/Testimonials/Testimonials";

import {motion} from 'framer-motion'
import { useEffect, useState } from "react";
import axios from "axios";

function About(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/Personality-Api-Fake/db.json')
        .then(res => setDatas(res.data.Testimonials) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
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
            <Container className="about-container">
                <p className="opacity-75">About <span className="greenColor fs-5">_______</span></p>
                <h1>LEARN MORE ABOUT ME</h1>
               <Row>
                    <Col lg={4} md={12}>
                        <Row>
                            <Col>
                                <img className="img-fluid" src={imgAbout} alt="IMAGE OF ME" />
                            </Col>
                            
                        </Row>
                    </Col>

                    <Col lg={8} md={12}>
                        <h2 className="greenColor">UI/UX & Graphic Designer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Row className="row-cols-1 row-cols-md-2 ">
                            <Col>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>Birthday:</b> 1 May 1995</p>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>Website:</b> www.example.com</p>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>Phone:</b> +123 456 7890</p>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>City:</b> New York, USA</p>
                            </Col>
                            <Col>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>Age:</b> 30</p>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>Degree:</b> Mster</p>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>PhEmailone:</b> email@example.com</p>
                                <p><MdKeyboardArrowRight className="greenColor" /> <b>Freelance:</b> Available</p>
                            </Col>
                        </Row>
                        <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
                    </Col>
               </Row>

               <Row className="row-cols-1 row-cols-md-5 about-cards my-5 py-5 gy-4 text-center justify-content-center">
                    <Col className="bg-dark bg-opacity-25 mx-1 position-relative p-5 ">
                        <p className="about-icon"><BsEmojiSmile size={30} className='greenColor' /></p>
                        <CountUp   
                                    
                                    start={0}
                                    end={232}
                                    duration={2.75}
                                    enableScrollSpy={true}
                                    className='fs-1'  />
                                     
                        <p>Happy Clients</p>
                    </Col>

                    <Col className="bg-dark bg-opacity-25 mx-1 position-relative p-5">
                        <p className="about-icon"><BsFillJournalBookmarkFill size={30} className='greenColor' /></p>
                        <CountUp    
                                    start={0}
                                    end={521}
                                    duration={2.75}
                                    enableScrollSpy={true}
                                    className='fs-1'  />
                        <p>Projects</p>
                    </Col>

                    <Col className="bg-dark bg-opacity-25 mx-1 position-relative p-5">
                        <p className="about-icon"><CiHeadphones size={30} className='greenColor' /></p>
                        <CountUp    
                                    start={500}
                                    end={1463}
                                    duration={2}
                                    enableScrollSpy={true}
                                    className='fs-1'  />
                        <p>Hours Of Support</p>
                    </Col>

                    <Col className="bg-dark bg-opacity-25 mx-1 position-relative p-5">
                        <p className="about-icon"><PiMedalLight size={30} className='greenColor' /></p>
                        <CountUp  
                                    start={0}
                                    end={24}
                                    duration={2.75}
                                    enableScrollSpy={true}
                                    className='fs-1'  />
                        <p>Awards</p>
                    </Col>
               </Row>
                 
               <p className="opacity-75">Skills <span className="greenColor fs-5">______</span></p>
               <Row className="row-cols-1 row-cols-md-2">
                   <Skills name={'HTML'} percent={'100'} />
                   <Skills name={'PHP'} percent={'80'} />
                   <Skills name={'CSS'} percent={'90'} />

                   <Skills name={'JAVASCRIPT'} percent={'75'} />
                   <Skills name={'WORDPRESS/CMS'} percent={'90'} />
                   <Skills name={'PHOTOSHOP'} percent={'55'} />
               </Row>

               <p className="opacity-75 mt-4">TESTIMONIALS <span className="greenColor fs-5">______</span></p>
               <Swiper
               modules={[ Pagination ]}
                spaceBetween={50}
                slidesPerView={1} 
                pagination={{ clickable: true ,dynamicBullets:true ,dynamicMainBullets:2 }}
                breakpoints={{
                    0:{
                        slidesPerView: 1,
                        spaceBetween: 20,
                    } , 
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                > 
                {datas.map(card => <SwiperSlide key={card.id}> <Testimonials {...card} /> </SwiperSlide>)}
                
                </ Swiper>
            </Container>
           
            
        </ motion.div>
    )
}
export default About ;