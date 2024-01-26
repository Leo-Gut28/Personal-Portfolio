import React, { useContext } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './app.css';
import BackToTop from './components/helper/back-to-top/back-to-top';
//import ChangeTheme from './components/helper/change-theme/change-theme';
import ScrollToTop from './components/helper/scroll-to-top';
import { ThemeContext } from './contexts/theme-context';
import { HomePage, ProjectPage } from './pages';
import Experience from './components/core-ui/experience/experience';
import Skills from './components/core-ui/skills/skills';
import Education from './components/core-ui/education/education';
import ArduinoRobot  from './components/core-ui/arduinorobot/arduinorobot'
import Pokerandom from './components/core-ui/pokerandom/pokerandom'
import Personalwebsite from './components/core-ui/personalwebsite/personalwebsite';
import Weatherapp from './components/core-ui/weatherapp/weatherapp';
import SoccerSentiment from './components/core-ui/soccersentiment/soccersentiment';

function App() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/experience' element={<Experience />} eact />
          <Route path='/skills' element={<Skills />} eact />
          <Route path='/education' element={<Education />} eact />
          <Route path='/projects' element={<ProjectPage />} exact />
          <Route path='/arduinorobot' element={<ArduinoRobot />} exact />
          <Route path='/pokerandom' element={<Pokerandom />} exact />
          <Route path='/personalwebsite' element={<Personalwebsite />} exact />
          <Route path='/weatherapp' element={<Weatherapp />} exact />
          <Route path='/soccersentiment' element={<SoccerSentiment />} exact />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
      <BackToTop />

    </div>
  );
}

export default App;
//<Route path='/blog' element={<BlogPage />} exact />