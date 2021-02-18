import emailjs from 'emailjs-com'
import { useState } from 'react';
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { register, handleSubmit, errors } = useForm();
    const [ successMessage, setSuccessMessage ] = useState('');

    const serviceId = "service_ID";
    const templateId = "template_ID";
    const { USER_ID: userId } = process.env;

    const onSubmit = (data, r)=> {
        sendEmail(
            serviceId,
            templateId,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            userId
        )
        r.target.reset();
    }

    const sendEmail = ({ serviceId, templateId, variables, userId }) =>{
        emailjs.send(serviceId, templateId, variables, userId)
               .then(() => setSuccessMessage('Form sent Successfully!!, I will reach out to you as soon as possible.'), 
                     err => console.error(`Sorry somehting went wrong ${err}`));
    }    

    return (
        <>
            <div className="contact" id="contact">
                    <div className="text-center">
                    <h1>Contact Me</h1>
                    <p>Please fill out the form and I will reach out to you as soon as possible</p>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                {/* Name */}
                                <div className="text-center">
                                        <input id="name"
                                            type="text"
                                            className="form-control details"
                                            placeholder="Name"
                                            name="name" 
                                            ref={
                                                register({
                                                    required:"Please enter your name",
                                                    maxLength:{
                                                        value: 25,
                                                        message:  "Please enter a name less than 25 characterse"
                                                    }
                                                })
                                            }
                                        />
                                        <div className="line"></div>
                                    </div>                          
                                <span className="error-message">{errors.name && errors.name.message}</span>
                                {/* Phone */}
                                <div className="text-center">
                                    <input id="phone" 
                                        type="text"
                                        className="form-control details" 
                                        placeholder="Phone Number"
                                        name="phone" 
                                        ref={
                                                register({
                                                    required:"Please enter your Phone number, that I can reach you",
                                                    pattern:{
                                                        value: /^[0-9]{10}$/i,
                                                        message: "Please provide a valid phone number"
                                                    }
                                                })
                                            }
                                    />
                                    <div className="line"></div>
                                </div>                          
                                <span className="error-message">{errors.phone && errors.phone.message}</span>
                                {/* Email */}
                                <div className="text-center">
                                    <input id="email"
                                        type="text" 
                                        className="form-control details" 
                                        placeholder="Email" 
                                        name="email" 
                                        ref={
                                                register({
                                                    required:"Please enter your email address",
                                                    pattern:{
                                                        value: /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,3}$/i,
                                                        message: "Please provide a valid email address"
                                                    }
                                                })
                                            }
                                    />
                                <div className="line"></div>
                                </div>                          
                                <span className="error-message">{errors.email && errors.email.message}</span>
                                {/* Subject */}
                                <div className="text-center">
                                    <input id="subject"
                                        type="text" 
                                        className="form-control details" 
                                        placeholder="Subject" 
                                        name="subject" 
                                        ref={
                                                register({
                                                    required:"Oops!!.... You forgot to add the subject",
                                                    maxLength:{
                                                        value: 25,
                                                        message:  "Please enter a Subject less than 45 characterse"
                                                    }
                                                })
                                            }
                                    />
                                    <div className="line"></div>
                                </div>                      
                            <span className="error-message prob desc">{errors.subject && errors.subject.message}</span>
                            </div>
                            {/* Description */}
                            <div className="col-md-6 col-xs-12">
                                <div className="text-center">
                                    <textarea 
                                        id="description" 
                                        className="form-control" 
                                        placeholder="Description" 
                                        type="text" 
                                        name="description"
                                        ref={
                                            register({
                                                required: "Please briefly describe your requirement"
                                            })
                                        }
                                    ></textarea>
                                    <br/>                      
                            <span className="error-message prob">{errors.description && errors.description.message}</span>
                                    <div className="line"></div>
                                    <br/><br/>
                                    <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
