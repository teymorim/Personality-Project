import axios from 'axios';
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import { Container , Col , Row } from 'react-bootstrap';
import MyNavbar from '../../Components/Navbar/MyNavbar';
import MyServices from '../../Components/ServicesComponents/MyServices';

import './Services.css'

function Services(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/Personality-Api-Fake/db.json')
        .then(res => setDatas(res.data.Services) )
        .catch(err => console.log('error page'))
        
    } , [])
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

            <Container className='services-container mb-5 pb-5'>
            <p className="opacity-75">SERVICES<span className="greenColor fs-5">_______</span></p>
            <h1 className='mb-4'>MY SERVICES</h1>
            <Row className='row-cols-1 row-cols-md-3 gy-3'>
               
                {datas.map(service => <Col key={service.id}><MyServices {...service} /></Col>)}
            </Row>
            </Container>

        </ motion.div>
        </>
    )
}
export default Services ;