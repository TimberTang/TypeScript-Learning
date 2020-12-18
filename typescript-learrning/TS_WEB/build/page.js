// namespace Compoents {
define("compoents", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Countent = exports.Header = void 0;
    // export namespace subComponents {
    //   export class SubClass{
    //   }
    // }
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    exports.Header = Header;
    var Countent = /** @class */ (function () {
        function Countent() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Countent';
            document.body.appendChild(elem);
        }
        return Countent;
    }());
    exports.Countent = Countent;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
// }
define("page", ["require", "exports", "compoents"], function (require, exports, compoents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new compoents_1.Header();
            new compoents_1.Countent();
            new compoents_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
// }
