import { Work } from '../constants/Experience'

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h3>My Experience</h3>
            </div>
            <div className="container experience-wrapper">
                {
                    Work.map(({ id, time, work, role, company })=>{
                        if(id%2!==0){
                           return(
                            <div key={id} className="timeline-block timeline-block-left">
                                <div className="marker"></div>
                                <div className="timeline-content-left">
                                    <h5>{role}</h5>
                                    <h6>{company}</h6>
                                    <h6>{time}</h6>
                                    <p>{work}</p>
                                </div>
                            </div>
                           )
                            }else{
                            return(
                                <div key={id} className="timeline-block timeline-block-right">
                                    <div className="marker"></div>
                                    <div className="timeline-content-right">
                                        <h5>{role}</h5>
                                        <h6>{company}</h6>
                                        <h6>{time}</h6>
                                        <p>{work}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Experience
