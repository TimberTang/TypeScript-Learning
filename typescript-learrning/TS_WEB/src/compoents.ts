// namespace Compoents {

  // export namespace subComponents {
  //   export class SubClass{

  //   }
  // }

  export class Header {
    constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'this is header'
        document.body.appendChild(elem)
    }
  }

  export class Countent {
    constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'this is Countent'
        document.body.appendChild(elem)
    }
  }

  export class Footer {
    constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'this is Footer'
        document.body.appendChild(elem)
    }
  }
// }