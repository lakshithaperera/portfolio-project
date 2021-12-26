import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';
import Header from './components/Header';
import Particles from "react-particles-js";

function App() {
  return (
    <>
    <Particles
    className='particle-canvas'
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type: "circle",
          stroke: {
            width: 7,
            color: "#4a4ad4"
          }
        }
      }
    }}
    />
    <Navbar/>
    <Header/>
    </>
    
  );
}

export default App;
