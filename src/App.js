import PhotoHomeDisplay from './PhotoHomeDisplay'
import AboutMe from './AboutMe'
import './App.css';
import { useEffect } from 'react';
import { Link } from 'react-scroll'


function App() {
  const handeClick = () => {

  };

  return (
    <div>
      <div id="phd1">
        <PhotoHomeDisplay />
        <Link to="ab1" smooth={true} duration={500} class="scroll-down" address="true"></Link>
      </div>
      <div id="ab1">
        <AboutMe />
      </div>
    </div>
  );

};

export default App;
