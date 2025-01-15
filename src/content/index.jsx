import { createRoot } from 'react-dom/client';
import App from './App';

function initApp() {
  const container = document.createElement('div');
  container.id = 'css-inspector-content-script';

  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<App />);
}

(() => {
  initApp();
})();
