import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './styles/global.css';
import './styles/pages/landing.css';
import logo from './images/Logo.svg';
/*
interface TitleProps {
text: string;
}

function Title(props: TitleProps) {
  return ( 
    <h1>{props.text}</h1>
    )
}
*/
//JSX ou TSX

function App() {
  return ( 
    <div id="page-landing"> 
        <div className="content-wrapper">
          <img src={logo} alt="Happy"/>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          
          <div className="location">
            <strong>Florianopolis</strong>
            <span>Santa Catarina</span>
          </div>

      <a href="#" className="enter-app"> <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/> </a>
      </div>
    </div>/* FIM DA PAGE LANDING */ 
        );
     }

export default App;
