// name space
// 减少全局变量的污染， 
// namespace Home {
  import {Header, Countent, Footer} from './compoents'
  export default  class Page {
    constructor() {
      new Header();
      new Countent();
      new Footer();
    }
  }
// }