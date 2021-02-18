
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            Central Studio Road, Singanallur, Coimbatore
                        </div>
                        <div className="d-flex">
                            <a href="tel:777-777-7777">(+91) 987-654-3210</a>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:guhan.delta@gmail.com">guhan.delta@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 colsm-6">
                        <div className="row">
                            <div className="col">
                                <a href="#header" className="footer-nav">Home</a>
                                <br/>
                                <a href="#aboutme" className="footer-nav">About me</a>
                                <br/>
                                <a href="#services" className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a href="#experience" className="footer-nav">Experience</a>
                                <br/>
                                <a href="#projects" className="footer-nav">Projects</a>
                                <br/>
                                <a href="#contact" className="footer-nav">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
