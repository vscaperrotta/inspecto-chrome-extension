function MainButton({ isOn, onClick }) {
  return (
    <button
      className={`main-button ${isOn ? "main-button--on" : "main-button--off"}`}
      onClick={onClick}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

export default MainButton;