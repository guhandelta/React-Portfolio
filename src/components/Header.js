import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1 className="title">UI & Fullstack Developer</h1>
                <div className="titleSub">
                    <Typed 
                        className="typed-text"
                        strings={["UI Designer", "Fullstack Developer", "Blockchain Enthusiast", "Dog Lover"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />&ensp;<br/><br/><br/>
                    <a href="#contact" className="btn-main-offer">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default Header

