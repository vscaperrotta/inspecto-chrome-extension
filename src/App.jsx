import { useState } from 'react'
// import Header from 'Components/Header';
import Footer from 'Components/Footer';

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
      <div className="app__container">
        {/* <Header /> */}
        <div className="content">
          <button
            className={`button ${isOn ? "on" : "off"}`}
            onClick={handleToggle}
          >
            {isOn ? "ON" : "OFF"}
          </button>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
