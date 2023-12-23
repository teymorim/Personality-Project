import Image from 'react-bootstrap/Image';
import './PortfolioItem.css'
import {motion} from 'framer-motion'

function PortfolioItem (props){
    
    return(
        <>
        
          <motion.div className='portfolio-img-container' initial={{ opacity:0 , scale:0  }}
        animate={{ opacity:1 , scale:1  }}
        transition={{ duration: 0.4, delay: 0.1 }}>
            <Image className='img-fluid' src={props.image} />
          </motion.div>
        
        </>
    )
};
export default PortfolioItem;