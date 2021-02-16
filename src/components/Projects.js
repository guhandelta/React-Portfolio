import portfolio from '../images/projects/portfolio.png'
import covidChart from '../images/projects/covidChart.png'
import cryptodash from '../images/projects/cryptodash.png'
import coffeeShop from '../images/projects/coffeeShop.png'

const Projects = () => {
    return (
        <>
            <div className="projects-wrapper" id="projects">
                <div className="container">
                    <hi className="text-uppercase text-center py-5">projects</hi>
                    {/* */}
                    <div className="image-box-wrapper row justify-content-center"> {/* tooltip*/}
                        <img src={portfolio} alt="project Website | NextJS NodeJS" className="project-image"/>
                        <span className="tooltiptext">Portfolio Website | NextJS NodeJS</span>
                    </div>
                    {/* */}
                    <div className="image-box-wrapper row justify-content-center"> {/* tooltip*/}
                        <img src={covidChart} alt="Covid Chart | ReactJS ChartJS" className="project-image"/>
                        <span className="tooltiptext">Covid Chart | ReactJS ChartJS</span>
                    </div>
                    {/* */}
                    <div className="image-box-wrapper row justify-content-center"> {/* tooltip*/}
                        <img src={cryptodash} alt="Cryptocurrency Dashboard | ReactJS Highcharts" className="project-image"/>
                        <span className="tooltiptext">Cryptocurrency Dashboard | ReactJS Highcharts</span>
                    </div>
                    {/* */}
                    <div className="image-box-wrapper row justify-content-center"> {/* tooltip*/}
                        <img src={coffeeShop} alt="Coffeeshop | GastbyJS Snipcart" className="project-image"/>
                        <span className="tooltiptext">Coffeeshop | GastbyJS Snipcart</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
