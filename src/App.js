import './App.css';
import KeywordPage from './page/KeywordPage';
import MainPage from './page/MainPage';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';


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
          </Routes>
        </BrowserView>
        <MobileView>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/keyword" element={<KeywordPage />} />
          </Routes>
        </MobileView>
      </div>
    </div>
  );
}

export default App;
