import './style.css';
import '../base.css';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import buttonStyles from './button.module.css'
import img from '../vite-logo.png'
import data from '../data.json'
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Raisa!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
   </div>
  <button id="btn">Click!</button>
  <img id="img"/>
  <prep>${JSON.stringify(data)}</prep>
`
document.getElementById('btn').className = buttonStyles.btn
setupCounter(document.querySelector('#counter'))
