// import {
//   observable,
//   observe
// } from '@nx-js/observer-util';

// class vElement extends HTMLElement {
//   constructor() {
//     super();

//     this.state = observable(this.data());
//     observe(this.render.bind(this));

//     this.addEventListener('click', () => {
//       console.log('clicked');
//     });
//   }

//   data() {
//     return {
//       firstName: '',
//       lastName: '',
//       list: [],
//       get fullName() {
//         return this.firstName + ' ' + this.lastName
//       }
//     };
//   }

//   onclick() {
//     console.log('clicked on first name');
//   }

//   render() {
//     this.innerHTML = `
//       <div>FirstName: ${this.state.firstName}</div>
//       <div>LastName: ${this.state.lastName}</div>
//       <div>FullName: ${this.state.fullName}</div>
//       <div>Age: ${this.state.age}</div>

//       <ul style="border:1px solid red; max-height: 300px; overflow: auto;">
//       ${this.state.list.map(item => {
//         return `<li>${item}</li>`
//       }).join('')}
//       </ul>
//       `;
//   }
// }

// customElements.define('v-element', vElement);

document.addEventListener('DOMContentLoaded', () => {

  document.body.innerHTML = `
  <my-element mood="happy"></my-element>
  `;

  // let vElement = document.getElementById('test');
  // vElement.state.firstName = 'ashvin';
  // vElement.state.lastName = 'suthar';
  // vElement.state.age = 0;

  // setInterval(() => {
  //   vElement.state.age++;
  //   vElement.state.list.unshift(vElement.state.age);
  // }, 1000);

});


import {LitElement, html} from '@polymer/lit-element';

    class MyElement extends LitElement {

      static get properties() {
        return {
          mood: {type: String}
        };
      }

      constructor() {
        super();
        this.mood = 'happy';
      }

      render() {
        return html`<style> .mood { color: green; } </style>
          Web Components are <span class="mood">${this.mood}</span>!`;
      }

    }

    customElements.define('my-element', MyElement);