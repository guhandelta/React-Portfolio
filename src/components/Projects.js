/* React Popupbox */
// import { PopupboxContainer, PopupboxManager } from 'react-popupbox'
/* Image Imports*/
import { portfolio, covidChart, cryptodash, coffeeShop } from '../images/projects'
/* FontAwesome Imports */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
/* React PopupBox Css */
import 'react-popupbox/dist/react-popupbox.css'


const Projects = () => {
    
    return (
        <>
            <div className="projects-wrapper" id="projects">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">projects</h1><br/><br/>
                    <div className="logo-header py-1">
                        <h3 className="github-header">
                            <a href="https://github.com/guhandelta" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="project-icon-github" icon={faGithub} />
                            </a>
                                <FontAwesomeIcon className="project-icon-github-replica" icon={faGithub} />
                        </h3>
                        <div className="profile-text">
                            <h5 className="text-uppercase text-center my">my </h5>&emsp;&emsp;&emsp;&emsp;
                            <h5 className="text-uppercase text-center profile"> profile</h5>
                        </div>
                    </div>
                    {/* */}
                    <div className="image-box-wrapper row justify-content-center my-4"> {/* tooltip*/}
                        <div className="project-image-box">
                            <img src={portfolio} alt="project Website | NextJS NodeJS" className="project-image"/> <br/>
                            <div className="overflow">
                                <a href="https://guhaprasaanth.vercel.app" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                                </a>
                            </div>
                        </div>
                        {/* <span className="tooltiptext">Portfolio Website | NextJS NodeJS</span> */}
                    {/* */}
                        <div className="project-image-box">
                            <img src={covidChart} alt="Covid Chart | ReactJS ChartJS" className="project-image"/> <br/>
                            <div className="overflow">
                                <a href="https://ngp-react-covid19-info.netlify.app/"  target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                                </a>
                            </div>
                        </div>
                        {/* <span className="tooltiptext">Covid Chart | ReactJS ChartJS</span> */}
                    {/* */}
                        <div className="project-image-box">
                            <img src={cryptodash} alt="Cryptocurrency Dashboard | ReactJS Highcharts" className="project-image"/> <br/>
                            <div className="overflow">
                                <a href="https://ngp-react-cryptocurerncy-dashboard.netlify.app/"  target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                                </a>
                            </div>
                        </div>
                        {/* <span className="tooltiptext">Cryptocurrency Dashboard | ReactJS Highcharts</span> */}
                    {/* */}
                        <div className="project-image-box">
                            <img src={coffeeShop} alt="Coffeeshop | GastbyJS Snipcart" className="project-image"/> <br/>
                            <div className="overflow">
                                <a href="https://ngp-gatsby-coffeeshop.netlify.app/"  target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
                                </a>
                            </div>
                        </div>
                        {/* <span className="tooltiptext">Coffeeshop | GastbyJS Snipcart</span> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
