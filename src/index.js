// import { observable, observe } from '@nx-js/observer-util';
import printMe from './print.js';

printMe();

class vElement {
  constructor() {
    this.scope = observable(this.data());
    observe(this.render.bind(this));
  }

  data() {
    return {
      firstName: '',
      lastName: '',
      get fullName() {
        return this.firstName + ' ' + this.lastName
      }
    }
  }

  render() {
    return `FirstName: ${this.scope.firstName}\n` +
      `LastName: ${this.scope.lastName}\n`+
      `FullName: ${this.scope.fullName}\n`;
  }
}

let obj = new vElement();
