import React from 'react'
import EC2 from '../images/EC2.png'

const AboutMe = () => {
    return (
       <div className="container py5">
           <div className="row">
               <div className="col-lg-6 col-xm-12">
                   <img src={EC2} alt="Guhaprasaanth"/>
               </div>
               <div className="col-lg-6 col-xm-12">
                    <h3>About Me</h3>
                   <p>
                        Enthusiastic, Responsible, Inquisitive, and an actively focused professional with Web Design/Development experience around 8 years, working on Healthcare and eCommerce websites, with a Master's in Computer Science. Acquired an Associate certificate as an AWS Certified Developer and Basic Chef Fluency Badge. Looking for any Full-Time opportunities in Web Design/Development, UI Development, Web Backend(Python Flask, Django | PHP Laravel, Ruby/Ruby-on-Rails), IOT or Cloud Engineer roles, with clients who are willing to sponsor for my H1b Visa. Currently working on developing an eCommerce website using Python Django, React JS and Stripe JS.
                   </p>
               </div>
           </div>
       </div>
    )
}

export default AboutMe