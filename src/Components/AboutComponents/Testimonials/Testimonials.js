import './Testimonials.css'

function Testimonials(props){
    return(
        <>
            <div className="testimonials-cards mt-4 bg-dark bg-opacity-25">
                <p>{props.description}</p>
                <div className="card-title-image text-center">
                    <img   src={props.image} alt="testimonials image" />
                    <h5 className='my-2'>{props.name}</h5>
                    <p className='opacity-50 '>{props.skill}</p>
                </div>
            </div>
        </>
    )
}
export default Testimonials;