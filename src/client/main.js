import "./main.style.css";
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';

function App() {
  const app = document.querySelector('#app');
    app.innerHTML = `
      <div id="app-container">
        ${Header()}
        ${Body()}
      </div>
    `;

  return app;
};

export default App();