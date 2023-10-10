import PhotoHomeDisplay from './PhotoHomeDisplay'
import AboutMe from './AboutMe'
import './App.css';
import { Link } from 'react-scroll'


function App() {

  return (
    <div>
      <div class="section">
        <div id="phd1">
          <PhotoHomeDisplay />
          <Link to="ab1" smooth={true} duration={500} class="scroll-down" address="true"></Link>
        </div>
      </div>
      <div class="section">
        <Link to="phd1" smooth={true} duration={500} class="scroll-up" address="true"></Link>
        <div id="ab1">
          <AboutMe />
        </div>

      </div>
    </div>
  );

};

export default App;
