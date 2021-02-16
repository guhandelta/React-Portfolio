import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services" id="services">
            <h1 className="py-5">Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size='2x' />
                            </div>
                            <h3>Web Design 1</h3>
                            <p>Some Random placeholder text for the time being</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size='2x' />
                            </div>
                                <h3>Web Design 2</h3>
                                <p>Some Random placeholder text for the time being</p>
                            </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFacebookF} size='2x' />
                            </div>
                            <h3>Web Design 3</h3>
                            <p>Some Random placeholder text for the time being</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faGoogle} size='2x' />
                            </div>
                            <h3>Web Design 4</h3>
                            <p>Some Random placeholder text for the time being</p>
                        </div>
                    </div>
                    {/* - */}
                </div>
            </div>
        </div>
    )
}

export default Services
