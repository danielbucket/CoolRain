import "./style.css";
import Header from './components/Header/Header.js';
import serverButton from './components/serverbutton.js';

document.querySelector("#app").innerHTML = `
  <div id="app-container"></div>
`;

const app = document.querySelector('#app-container');

Header(app);
serverButton(app);
