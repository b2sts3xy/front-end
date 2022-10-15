import './App.css';
import KeywordPage from './page/KeywordPage';
import MainPage from './page/MainPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';


function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div>
      <div className="App">
        <BrowserView>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/keyword" element={<KeywordPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserView>
        <MobileView>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/keyword" element={<KeywordPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </MobileView>
      </div>
    </div>
  );
}

export default App;
