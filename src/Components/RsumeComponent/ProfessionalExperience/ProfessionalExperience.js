import './ProfessionalExperience.css'
import {Col} from 'react-bootstrap'

function ProfessionalExperience(){
    return(
        <>
          
            <h1 className="mb-4 ps-3 ">Professional Experience</h1>
            <div className="professional d-flex flex-column">
            <h3 className="greenColor"><span>SENIOR GRAPHIC DESIGN SPECIALIST</span></h3>
            <p className='pro-date'>2019 - Present</p>
            <p>Experion, New York, NY</p>
            <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
            </ul>
            
            <h3 className="greenColor pt-5"><span>GRAPHIC DESIGN SPECIALIST</span></h3>
            <p className='pro-date'>2017 - 2018</p>
            <p>Stepping Stone Advertising, New York, NY</p>
            <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
            </ul>
            </div>
        
        </>
    )
}
export default ProfessionalExperience