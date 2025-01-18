import logo from './logo.svg';
import './App.css';

import Home from './Home/Home';
import { About } from './About/About';
import { Team } from './Team/Team';
import Course from './Course/Courses';
import Rev from './Review/Review';
import Contact from './Contact/Contact';
import Foo from './Footer/Footer';

function App() {
  return (
    <div className="App">

      <Home />
      <About />
      <Team />
      <Course />
      <Rev />
      <Contact />
      <Foo />
    </div>
  );
}

export default App;
