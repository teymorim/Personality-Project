import './MyServices.css'
import Card from 'react-bootstrap/Card';

function MyServices(props){
    return(
        <>
             <Card style={{height: '100%'}}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
             </Card>
        </>
    )
}
export default MyServices;