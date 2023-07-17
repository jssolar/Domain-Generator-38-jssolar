import './style.css';
import { domainGenerator } from './domainGenerator.js';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Domain Generator</h1>
    <div class="card">
      <button id="domain" type="button">genera tu dominio</button>
      <p class="domain">domain</p>
    </div>
  </div>
`;

// domainGenerator(document.querySelector('#domain'));
// domainGenerator(document.querySelector('#domain'))
document.querySelector('#domain').addEventListener('click', () => {
  domainGenerator(document.querySelector('#domain'));
});


















// import './style.css'
// import {domainGenerator}  from './domainGenerator.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <h1>Domain Generator</h1>
//     <div class="card">
//       <button id="domain" type="button">Genera tu Dominio!</button>
//       <p class="domain">Genera tu Dominio!</p>
//     </div>
//   </div>
// `;

// domainGenerator(document.querySelector('#domain'))
// const domainParagraph = document.querySelector('.domain');

// domainGenerator(domainParagraph);


// document.querySelector('.domain').addEventListener('click',  () =>  
// {domainGenerator(document.querySelector('.domain'))

// });





