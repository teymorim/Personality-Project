import { Container, Row } from "react-bootstrap";
import MyNavbar from "../../Components/Navbar/MyNavbar";
import './Home.css'
import { CiTwitter , CiLinkedin , CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import {motion} from 'framer-motion'
import useWindowSize from "../../hooks/useWindowSize/useWindowSize";

function Home(){
    const windowSize = useWindowSize()
 
    return(
        
        <motion.div className="home" initial={{ opacity:0 , y:-150  }}
        animate={{ opacity:1 , y:0  }}
        transition={{ duration: 0.4, delay: 0.1 }}>
         {windowSize < 992 && <MyNavbar />}
        <Container className="d-flex flex-column justify-content-center align-items-start h-100">
        <h1 className="px-3">Emily Jones</h1>
        <h2 className="px-3">I'm a passionate graphic designer from New York</h2> 
        {windowSize > 992 && <MyNavbar />}
        <div className="d-flex home-icons px-2">
            <p><CiTwitter size={27} /></p>
            <p><FaInstagram size={27} /></p>
            <p><CiFacebook size={27} /></p>
            <p><CiLinkedin size={27} /></p>
        </div>
        </Container>
        
        </ motion.div>
    )
}
export default Home ;