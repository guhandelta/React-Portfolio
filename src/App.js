import { Header, Navbar, AboutMe, Services } from './components'
import Particles from 'react-particles-js'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles:{
            number:{
              value: 30,
              density:{
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: 'circle',
              stroke: {
                width: 6, 
                color: '#f9ab00'
              }
            }
          } 
        }}
      />
      <Navbar />  
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;
