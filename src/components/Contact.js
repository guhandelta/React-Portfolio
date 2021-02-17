import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact">
                    <div className="text-center">
                    <h1>Contact Me</h1>
                    <p>Please fill out the form and I will reach out to you as soon as possible</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                                <div className="text-center">
                                <input id="name" type="text" className="form-control details" placeholder="Name" name="name" />
                            <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input id="phone" type="text" className="form-control details" placeholder="Phone Number" name="phone" />
                                <div className="line"></div>
                            </div>
                                <div className="text-center">
                                <input id="email" type="text" className="form-control details" placeholder="Email" name="email" />
                            <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input id="subject" type="text" className="form-control details" placeholder="Subject" name="subject" />
                                <div className="line"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea id="description" className="form-control" placeholder="Description" type="text" name="description"></textarea>
                                <div className="line"></div>
                                <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
