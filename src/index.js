import {
  observable,
  observe
} from '@nx-js/observer-util';

class vElement extends HTMLElement {
  constructor() {
    super();

    this.scope = observable(this.data());
    observe(this.render.bind(this));
  }

  data() {
    return {
      firstName: '',
      lastName: '',
      list: [],
      get fullName() {
        return this.firstName + ' ' + this.lastName
      }
    }
  }

  render() {
    this.innerHTML = `
      <div>FirstName: ${this.scope.firstName}</div>
      <div>LastName: ${this.scope.lastName}</div>
      <div>FullName: ${this.scope.fullName}</div>
      <div>Age: ${this.scope.age}</div>

      <ul>
      ${this.scope.list.map(item => {
        return `<li>${item}</li>`
      }).join('')}
      </ul>
      `;
  }
}

customElements.define('v-element', vElement);

document.addEventListener('DOMContentLoaded', () => {

  document.body.innerHTML = `
    <v-element id="test"></v-element>
  `;

  let vElement = document.getElementById('test');
  vElement.scope.firstName = 'ashvin';
  vElement.scope.lastName = 'suthar';
  vElement.scope.age = 0;

  setInterval(() => {
    vElement.scope.age++;
    vElement.scope.list.push(vElement.scope.age);
  }, 4000);

});