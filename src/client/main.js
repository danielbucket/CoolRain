import "./main.style.css";
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';


class CoolRain {
  constructor() {
    this.user = {
       name: "username",
       email: "your_email@email.com",
    };
    this.body = {
      text: "Body Text",
    };

    this.App = this.App.bind(this);
    this.handleAppState = this.handleAppState.bind(this);
  };

  handleAppState(e) {
    const state = this[e.target.id];
    console.log("E: ", e)
  };

  App() {
    const element = document.querySelector('#app');
    const { handleAppState, user, body } = this;

    element.appendChild(Header(handleAppState, user));
    element.appendChild(Body(handleAppState, body.text));
  };
};


const coolRainApp = new CoolRain;
coolRainApp.App();