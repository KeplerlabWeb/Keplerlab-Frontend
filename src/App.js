import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import ReactGA from 'react-ga';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Single from './pages/Single/Single';
import Products from './pages/Products/Products';
import Team from './pages/Team/Team';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';


import './App.css';
import LiveSessions from './pages/LiveSessions/LiveSessions';

const TRACKING_ID = "UA-241941326-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<Single />} />
          <Route path="/products" element={<Products />} />
          <Route path="/live-sessions" element={<LiveSessions/>} />
          <Route path="/teams" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfUse />} />
        </Routes>
      </Suspense>
    </Router>
      
      
    
  );
}

export default App;
