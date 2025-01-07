import { useState } from 'react'
// import Header from 'Components/Header';
import MainButton from 'Components/MainButton';
import Footer from 'Components/Footer';
import './App.scss';

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = async () => {
    const newState = !isOn;
    setIsOn(newState);

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
      </div >
    </>
  )
}

export default App
