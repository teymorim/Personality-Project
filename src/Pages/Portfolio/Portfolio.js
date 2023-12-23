import axios from 'axios';
import {motion} from 'framer-motion'
import {  useEffect, useState } from 'react';
import {Button, Container , Row , Col} from 'react-bootstrap'
import MyNavbar from '../../Components/Navbar/MyNavbar';
import PortfolioItem from '../../Components/PortfolioComponents/PortfolioItem/PortfolioItem';
import './Portfolio.css'

function Portfolio(){
    const[showPorfolio , setShowPorfolio] = useState('PortfolioAlls')

    const[datas , setDatas] = useState([])
  
    useEffect(() => {
        axios.get('https://teymorim.github.io/Personality-Api-Fake/db.json')
        .then((response) => {
                if(showPorfolio == 'PortfolioAlls')
                    setDatas(response.data.PortfolioAll)
                else if(showPorfolio == 'PortfolioWebs')
                    setDatas(response.data.PortfolioWeb)
                else if(showPorfolio == 'PortfolioCards')
                    setDatas(response.data.PortfolioCard)
                else if(showPorfolio == 'portfolioApps')
                    setDatas(response.data.PortfolioApp)    
        })
      
        .catch(err => console.log('error page'))
        
    } , [showPorfolio])
    
   
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

            <Container className='portfolio-container mb-5 pb-5'>
            <p className="opacity-75">PORTFOLIO<span className="greenColor fs-5">_______</span></p>
            <h1 className='mb-4'>MY WORKS</h1>
               <div className="portfolio-btns d-flex justify-content-center align-items-center">
                <Button className={showPorfolio == 'PortfolioAlls'? 'active' : ''} onClick={() => setShowPorfolio('PortfolioAlls')}>ALL</Button>
                <Button className={showPorfolio == 'portfolioApps'? 'active' : ''} onClick={() => setShowPorfolio('portfolioApps')}>APP</Button>
                <Button className={showPorfolio == 'PortfolioCards'? 'active' : ''} onClick={() => setShowPorfolio('PortfolioCards')}>CARD</Button>
                <Button className={showPorfolio == 'PortfolioWebs'? 'active' : ''} onClick={() => setShowPorfolio('PortfolioWebs')}>WEB</Button>
               </div>
               <Row className='row-cols-1 row-cols-md-3 gy-4 my-3'>
                { datas.map(data => <Col key={data.id}><PortfolioItem {...data} /></Col>)}
              
               </Row>
            </Container>
            </ motion.div>
        </>
    )
}
export default Portfolio ;