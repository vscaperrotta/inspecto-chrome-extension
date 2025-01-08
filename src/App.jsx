import { useState, useEffect } from 'react'
// import Header from 'Components/Header';
import Footer from 'Components/Footer';
import MainButton from 'Components/MainButton';
import { isDev } from '../config/utils';
import './App.scss';

function App() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (!isDev) {
      chrome.storage.sync.get(['isOn'], (data) => {
        if (typeof data.isOn !== 'undefined') {
          setIsOn(data.isOn);
        }
      });
    }
  }, []);

  const handleToggle = async () => {
    const newState = !isOn;
    setIsOn(newState);

    if (!isDev) {
      chrome.storage.sync.set({ isOn: newState });
    }

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.tabs.sendMessage(tab.id, {
      type: "TOGGLE",
      value: newState
    });
  };

  return (
    <>
      <div className="app">
        {/* <Header /> */}
        <main className="content">
          <MainButton
            isOn={isOn}
            onClick={handleToggle}
          />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
