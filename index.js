const { observable, observe } = require('@nx-js/observer-util');

class vElement {
  constructor() {
    this.scope = observable();

    observe(this.observe.bind(this));
  }

  render() {
    return `<h1>${this.scope.name}</h1>`
  }

  observe() {
    console.log(this.render());
  }
}

let obj = new vElement();
obj.scope.name = 50;
obj.scope.name++;
obj.scope.name = 51;
obj.scope.name = 52;