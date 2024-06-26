"use strict";
import lang from "/scripts/lang/en.js";
import Abstract from "/scripts/abstract.js";
const e = React.createElement;
class rules_page extends Abstract {
  render() {
    return [
      e(
        "a",
        {
          href: "/",
          title: lang.to_main_page,
          className: "back",
          key: this.uk(),
        },
        lang.back
      ),
      e("h1", { className: "h1", key: this.uk() }, lang.rules_title),
      e(
        "div",
        { className: "info", key: this.uk() },
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_1,
          e("br", { key: this.uk() }),
          lang.rules_2
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_3,
          e("br", { key: this.uk() }),
          e("img", { src: "/images/guide/r1.png", key: this.uk() }),
          lang.rules_4,
          e("img", { src: "/images/guide/r2.png", key: this.uk() })
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_5,
          e("img", { src: "/images/guide/r3.png", key: this.uk() })
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_6,
          e("img", { src: "/images/guide/r4.png", key: this.uk() })
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_7,
          e("img", { src: "/images/guide/r5.png", key: this.uk() })
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_8,
          e("img", { src: "/images/guide/r6.png", key: this.uk() })
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_9,
          e("img", { src: "/images/guide/r7.png", key: this.uk() })
        ),
        e(
          "div",
          { className: "row", key: this.uk() },
          lang.rules_10,

          e("br", { key: this.uk() }),
          e("br", { key: this.uk() }),
          lang.rules_11,
          e("br", { key: this.uk() }),
          e(
            "ul",
            { key: this.uk() },
            e("li", { key: this.uk() }, lang.rules_12),
            e("li", { key: this.uk() }, lang.rules_14)
            //  e('li', null, lang.rules_15),
          ),
          e("br", { key: this.uk() }),
          lang.rules_16
        )
      ),
    ];
  }
}
//export default rules_page;
//return rules_page;
var Start = function () {
  const root = ReactDOM.createRoot(document.querySelector("#main"));
  root.render(React.createElement(rules_page, { key: this.uk() }));
};
export { Start };
