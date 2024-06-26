(() => {
  "use strict";
  var n = {
      365: (n, e, t) => {
        t.d(e, { A: () => d });
        var i = t(601),
          r = t.n(i),
          a = t(314),
          o = t.n(a)()(r());
        o.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;1,200&display=swap);",
        ]),
          o.push([
            n.id,
            '* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  font-family: "Roboto Mono", monospace;\n  font-size: 0.7rem;\n  --main-grey-color: rgba(51, 51, 51, 255);\n  --sidebar-color: rgba(250, 250, 250, 255);\n  --emerald-green: #10b981;\n  --red: #f87171;\n  --yellow: #fef3c7;\n  --green: #86efac;\n  --grey: #9ca3af;\n}\n\n/* Main page wrapper styles. */\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  height: 100vh;\n}\n\n/* Sidebar styles. */\n\n.sidebar {\n  background-color: var(--sidebar-color);\n}\n\n.sidebar-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  gap: 10px;\n}\n\n.sidebar-title img {\n  width: 40px;\n}\n\n.sidebar-title h2 {\n  color: #10b981;\n}\n\n/* Navigation menu styles. */\n\n.list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n}\n\n.list-container-heading {\n  display: flex;\n  justify-content: space-around;\n}\n\n.plus-btn-container {\n  display: flex;\n  border: 1px solid var(--main-grey-color);\n  border-radius: 10px;\n  padding: 0.5rem;\n  gap: 1rem;\n}\n\n.plus-btn-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n  background-color: var(--main-grey-color);\n  color: white;\n}\n\n.list-collection-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-top: 2rem;\n}\n\n.list-collection-heading {\n  width: 95%;\n  align-self: center;\n  display: flex;\n  place-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n\n.list-collection-title {\n  margin-left: 0.5rem;\n  font-size: 1rem;\n  color: var(--grey);\n}\n\n.selected-list {\n  color: var(--emerald-green);\n  border-bottom: 2px solid var(--emerald-green);\n}\n\n/* ADD NEW LIST FORM styles. */\n\n.list-input-container {\n  position: relative;\n  width: 95%;\n}\n\n.list-input {\n  visibility: hidden;\n  width: 100%;\n  height: 55px;\n  margin-left: 5px;\n  padding: 0.5rem;\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid var(--main-grey-color);\n  color: var(--emerald-green);\n}\n\n.list-input-container span {\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  padding: 10px;\n  visibility: hidden;\n  font-weight: bold;\n}\n\n.list-input-container input:focus ~ span {\n  transform: translateX(10px) translateY(-7px);\n  transition: 0.5s;\n  font-size: 0.7rem;\n  padding: 0 10px;\n  background: var(--emerald-green);\n  color: white;\n}\n\n.list-input-container input:focus {\n  border: 1px solid var(--emerald-green);\n}\n\n/* DYNAMICALLY CREATED LIST ELEMENT styles. */\n\n.list-element {\n  height: max-content;\n  display: flex;\n  background-color: var(--sidebar-color);\n  justify-content: space-between;\n  align-items: center;\n  color: var(--main-grey-color);\n  border: 1px solid var(--main-grey-color);\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-radius: 10px;\n  width: 95%;\n  padding: 0.5rem;\n}\n\n.list-element:hover {\n  background-color: var(--main-grey-color);\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n.list-name {\n  font-size: 0.8rem;\n}\n\n.list-btn-container {\n  display: flex;\n  gap: 6px;\n}\n\n.list-btn-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n.list-delete,\n.list-edit {\n  border-radius: 15px;\n  padding: 5px;\n}\n.list-delete:hover,\n.list-edit:hover {\n  background-color: var(--emerald-green);\n}\n\n/* Main section styles. */\n\n.main {\n  padding: 2rem 4rem;\n}\n\n.main-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n/* Homepage styles. */\n\n.homepage-container {\n  margin-top: 25%;\n  margin-left: 25%;\n  width: 55%;\n  display: grid;\n  place-items: center;\n  gap: 1rem;\n}\n\n.homepage-container h1 {\n  color: var(--emerald-green);\n  font-size: 1.8rem;\n}\n\n.homepage-container p {\n  color: var(--grey);\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: center;\n}\n\n/* Overlay styles. */\n#overlay {\n  position: fixed;\n  transition: 200ms ease-in-out;\n  opacity: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n\n#overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n/* Modal styles. */\n#task-modal {\n  width: max(300px, 40%);\n  height: max(360px, 40%);\n}\n\n#list-modal {\n  width: 40%;\n  height: 200px;\n}\n\n#task-modal,\n#list-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  border-radius: 10px;\n  z-index: 20;\n  background-color: white;\n}\n\n#task-modal.active,\n#list-modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n/* Mains section header styles. */\n\n.main-heading {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n\n.add-item-container {\n  display: flex;\n  width: 150px;\n  border: 1px solid var(--main-grey-color);\n  align-items: center;\n  justify-content: space-around;\n  border-radius: 10px;\n  height: 50px;\n}\n\n.add-item-container:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n  background-color: var(--main-grey-color);\n  color: white;\n}\n\n/* DYNAMICALLY CREATED TASK ELEMENT styles. */\n\n.item-card {\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 7fr 2fr 1fr 1fr;\n  place-items: center;\n  height: 50px;\n  border: 1px solid var(--main-grey-color);\n  border-radius: 10px;\n\n  position: relative;\n}\n\n.item-card:hover {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;\n}\n\n.item-name {\n  justify-self: start;\n}\n\n[type="checkbox"]:checked {\n  opacity: 0.5;\n  color: lightgray;\n}\n\n.completed-task {\n  opacity: 0.5;\n}\n\n.completed-task:after {\n  position: absolute;\n  left: 39%;\n  top: 50%;\n  height: 2px;\n  background: black;\n  content: "";\n  width: 73%;\n  display: block;\n  transform: translateX(-37%);\n  transition: all 0.3s;\n}\n\n.date {\n  justify-self: end;\n}\n\n.edit-item-btn {\n  justify-self: end;\n}\n\n.delete-item-btn,\n.edit-item-btn {\n  border-radius: 30px;\n  height: 40px;\n  width: 40px;\n  display: grid;\n  place-items: center;\n}\n\n.delete-item-btn:hover,\n.edit-item-btn:hover {\n  background-color: var(--emerald-green);\n}\n\n.priority-indicator {\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.priority-low {\n  background-color: var(--green);\n}\n\n.priority-medium {\n  background-color: var(--yellow);\n}\n\n.priority-high {\n  background-color: var(--red);\n}\n\n.priority-default {\n  background-color: var(--grey);\n}\n\n.checkbox-container {\n  border-left: 3px solid var(--main-grey-color);\n  height: 100%;\n  width: 100%;\n  display: grid;\n  place-items: center;\n}\n\n.checkbox-container > * {\n  height: 25px;\n  width: 25px;\n}\n\n/* ADD NEW TASK FORM styles.*/\n\n.task-form {\n  height: 100%;\n  width: 100%;\n}\n\n.item-grid {\n  display: grid;\n  grid-template: 1fr 1fr / 1fr 1fr;\n  padding: 1rem;\n  gap: 0.5rem;\n  height: 55%;\n  align-items: start;\n  background-color: var(--sidebar-color);\n  padding-top: 2rem;\n}\n\n.item-grid > * {\n  height: 45px;\n}\n\n.item-form-title {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(16, 185, 129, 1) 0%,\n    rgba(11, 193, 166, 1) 29%,\n    rgba(11, 193, 166, 1) 100%\n  );\n  height: 20%;\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n\n  display: grid;\n  place-items: center;\n}\n\n/* FORM BUTTON (for both list and tasks) styles. */\n\n.item-form-buttons {\n  display: flex;\n  background-color: var(--sidebar-color);\n  align-items: center;\n  justify-content: space-around;\n  height: 30%;\n  padding: 1rem;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.item-form-buttons > button {\n  width: 300px;\n  height: 35px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(16, 185, 129, 1) 0%,\n    rgba(11, 193, 166, 1) 29%,\n    rgba(11, 193, 166, 1) 100%\n  );\n  outline: none;\n  border: none;\n  color: white;\n}\n\n.item-form-buttons > button:nth-child(1),\n.edit-list-buttons > button:nth-child(1) {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.item-form-buttons > button:nth-child(1):hover,\n.item-form-buttons > button:nth-child(2):hover {\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgb(14, 169, 118) 0%,\n    rgb(11, 179, 153) 29%,\n    rgb(10, 174, 149) 100%\n  );\n  height: 37px;\n}\n\n.item-form-buttons > button:nth-child(2),\n.edit-list-buttons > button:nth-child(2) {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n/* EDIT LIST NAME FORM styles. */\n\n#list-form {\n  width: 100%;\n  height: 100%;\n}\n\n.list-title {\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(16, 185, 129, 1) 0%,\n    rgba(11, 193, 166, 1) 29%,\n    rgba(11, 193, 166, 1) 100%\n  );\n  height: 40%;\n  color: white;\n  font-weight: bold;\n  font-size: 1.5rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  display: grid;\n  place-items: center;\n}\n\n.list-body {\n  display: flex;\n  flex-direction: column;\n  height: 60%;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.list-body label {\n  color: var(--grey);\n  font-weight: bold;\n  font-size: 0.8rem;\n}\n\n.edit-list-buttons {\n  display: flex;\n}\n.edit-list-buttons > button {\n  width: 250px;\n  height: 35px;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(16, 185, 129, 1) 0%,\n    rgba(11, 193, 166, 1) 29%,\n    rgba(11, 193, 166, 1) 100%\n  );\n  outline: none;\n  border: none;\n  color: white;\n}\n\n.edit-list-buttons > button:hover {\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgb(14, 169, 118) 0%,\n    rgb(11, 179, 153) 29%,\n    rgb(10, 174, 149) 100%\n  );\n  height: 36px;\n}\n',
            "",
          ]);
        const d = o;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  i = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  i &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  i && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, i, r, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var o = {};
              if (i)
                for (var d = 0; d < this.length; d++) {
                  var s = this[d][0];
                  null != s && (o[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (i && o[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = a)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  r &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = r))
                      : (c[4] = "".concat(r))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, i = 0; i < e.length; i++)
            if (e[i].identifier === n) {
              t = i;
              break;
            }
          return t;
        }
        function i(n, i) {
          for (var a = {}, o = [], d = 0; d < n.length; d++) {
            var s = n[d],
              l = i.base ? s[0] + i.base : s[0],
              c = a[l] || 0,
              p = "".concat(l, " ").concat(c);
            a[l] = c + 1;
            var u = t(p),
              m = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(m);
            else {
              var g = r(m, i);
              (i.byIndex = d),
                e.splice(d, 0, { identifier: p, updater: g, references: 1 });
            }
            o.push(p);
          }
          return o;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, r) {
          var a = i((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var o = 0; o < a.length; o++) {
              var d = t(a[o]);
              e[d].references--;
            }
            for (var s = i(n, r), l = 0; l < a.length; l++) {
              var c = t(a[l]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            a = s;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var i = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          i.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var i = "";
                t.supports && (i += "@supports (".concat(t.supports, ") {")),
                  t.media && (i += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (i += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (i += t.css),
                  r && (i += "}"),
                  t.media && (i += "}"),
                  t.supports && (i += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(i, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(i) {
    var r = e[i];
    if (void 0 !== r) return r.exports;
    var a = (e[i] = { id: i, exports: {} });
    return n[i](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var i in e)
        t.o(e, i) &&
          !t.o(n, i) &&
          Object.defineProperty(n, i, { enumerable: !0, get: e[i] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var i = e.getElementsByTagName("script");
        if (i.length)
          for (var r = i.length - 1; r > -1 && (!n || !/^http(s?):/.test(n)); )
            n = i[r--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.nc = void 0),
    (() => {
      var n = t(72),
        e = t.n(n),
        i = t(825),
        r = t.n(i),
        a = t(659),
        o = t.n(a),
        d = t(56),
        s = t.n(d),
        l = t(540),
        c = t.n(l),
        p = t(113),
        u = t.n(p),
        m = t(365),
        g = {};
      (g.styleTagTransform = u()),
        (g.setAttributes = s()),
        (g.insert = o().bind(null, "head")),
        (g.domAPI = r()),
        (g.insertStyleElement = c()),
        e()(m.A, g),
        m.A && m.A.locals && m.A.locals;
      const h = "lists",
        b = "listId";
      function f(n, e) {
        localStorage.setItem(h, JSON.stringify(n)),
          localStorage.setItem(b, JSON.stringify(e));
      }
      let v = JSON.parse(localStorage.getItem(h)) || [];
      const y = (n, e) => ({
          id: Date.now().toString(),
          name: n,
          icon: e,
          tasks: [],
          completed: [],
        }),
        x = (n) => v.find((e) => e.id === n),
        k = t.p + "184b2da50bd4922b3638.svg",
        w = t.p + "642da2f9203fed7e99a0.svg",
        L = t.p + "3be0ea4ac64cead2bf95.svg";
      let E = "none",
        S = "none",
        C = "none";
      !(function () {
        const n = v;
        f(n, S), (S = JSON.parse(localStorage.getItem(b)));
        const e = document.querySelector(".sidebar-title"),
          t = document.querySelector(".list-container"),
          i = document.querySelector(".list-form"),
          r = document.querySelector(".plus-btn-container"),
          a = document.querySelector(".list-input"),
          o = document.querySelector(".list-span"),
          d = document.querySelector("#list-form"),
          s = document.querySelector("#overlay"),
          l = document.querySelectorAll(".cancel"),
          c = document.querySelector(".main-content"),
          p = document.querySelector(".task-form"),
          u = document.querySelector(".task-title"),
          m = document.querySelector(".task-description"),
          g = document.querySelector(".task-date"),
          h = document.querySelector(".task-priority");
        function I(e) {
          e.preventDefault(),
            "none" == C
              ? "" !== u.value &&
                ((n, e, t, i, r) => {
                  const a = x(n),
                    o = ((n, e, t, i, r) => ({
                      id: Date.now().toString(),
                      listId: n,
                      name: e,
                      description: t,
                      date: i,
                      priority: r,
                      complete: !1,
                    }))(n, e, t, i, r);
                  a.tasks.push(o);
                })(S, u.value, m.value, g.value, h.value)
              : (console.log(`The seelcted task id is ${C}`),
                ((n, e, t, i, r, a) => {
                  const o = ((n, e) => {
                    const t = x(n);
                    for (const n in t)
                      if ("tasks" === n) {
                        const i = t[n].find((n) => n.id === e);
                        if (i) return i;
                      }
                  })(n, e);
                  (o.name = t),
                    (o.description = i),
                    (o.date = r),
                    (o.priority = a);
                })(S, C, u.value, m.value, g.value, h.value)),
            f(n, S),
            j(document.querySelector("#task-modal")),
            O(E),
            (u.value = ""),
            (m.value = ""),
            (g.value = ""),
            (h.value = "");
        }
        e.addEventListener("click", D),
          a.addEventListener("mouseout", q),
          p.addEventListener("submit", (n) => {
            I(n);
          });
        const T = () => {
            M(),
              n.forEach((n) => {
                const e = document.createElement("p");
                (e.innerHTML = n.name),
                  e.classList.add("list-name"),
                  e.setAttribute("readonly", !0),
                  (e.dataset.listId = n.id),
                  n.id === S && e.classList.add("selected-list");
                const i = document.createElement("img");
                (i.src = k),
                  (i.dataset.btn = "edit"),
                  i.classList.add("list-edit"),
                  (i.dataset.listId = n.id);
                const r = document.createElement("img");
                (r.src = w),
                  (r.dataset.btn = "delete"),
                  (r.dataset.listId = n.id),
                  r.classList.add("list-delete");
                const a = document.createElement("div");
                a.classList.add("list-btn-container"),
                  a.appendChild(i),
                  a.appendChild(r);
                const o = document.createElement("li");
                o.classList.add("list-element"),
                  o.appendChild(e),
                  o.appendChild(a),
                  t.appendChild(o);
              });
          },
          M = () => {
            t.innerHTML = "";
          },
          A = () => {
            c.innerHTML = "";
          };
        function q() {
          console.log("toggled activated"),
            "hidden" == a.style.visibility
              ? ((a.style.visibility = "visible"),
                (o.style.visibility = "visible"))
              : ((a.style.visibility = "hidden"),
                (o.style.visibility = "hidden"));
        }
        function N(n) {
          n.classList.add("active"), s.classList.add("active");
        }
        function j(n) {
          n.classList.remove("active"), s.classList.remove("active");
        }
        function D() {
          A();
          const n = document.createElement("h1");
          (n.innerHTML = "To-Do App"), n.classList.add("homepage-title");
          const e = document.createElement("p");
          (e.innerHTML =
            "Create a new list by clicking the + button or select an existing one to start adding your tasks."),
            e.classList.add("homepage-descr");
          const t = document.createElement("div");
          t.classList.add("homepage-container"),
            t.appendChild(n),
            t.appendChild(e),
            c.appendChild(t);
        }
        function O(n) {
          console.log("tasks rendered"),
            A(),
            (function (n) {
              const e = document.createElement("div");
              e.classList.add("main-heading");
              const t = document.createElement("h1");
              (t.innerHTML = n.name), t.classList.add("list-heading");
              const i = document.createElement("div");
              i.classList.add("add-item-container"),
                i.addEventListener("click", () => {
                  (C = "none"), N(document.querySelector("#task-modal"));
                });
              const r = document.createElement("h3");
              r.innerHTML = "Add item";
              const a = document.createElement("img");
              (a.src = L),
                i.appendChild(r),
                i.appendChild(a),
                e.appendChild(t),
                e.appendChild(i),
                c.appendChild(e);
            })(n),
            n.tasks.forEach((e) => {
              let t = document.createElement("div");
              t.classList.add("item-card");
              let i = document.createElement("div");
              i.classList.add("priority-indicator"),
                "Low" == e.priority
                  ? i.classList.add("priority-low")
                  : "Medium" == e.priority
                  ? i.classList.add("priority-medium")
                  : "High" == e.priority
                  ? i.classList.add("priority-high")
                  : i.classList.add("priority-default");
              let r = document.createElement("input");
              r.setAttribute("type", "checkbox"),
                (r.dataset.taskId = e.id),
                r.classList.add("checkbox"),
                (r.dataset.id = e.id),
                (r.dataset.listId = n.id),
                (r.checked = e.complete),
                e.complete && t.classList.add("completed-task");
              let a = document.createElement("div");
              a.classList.add("checkbox-container"), a.appendChild(r);
              let o = document.createElement("h3");
              o.classList.add("item-name"), (o.textContent = e.name);
              let d = document.createElement("h3");
              (d.textContent = e.date), d.classList.add("date");
              let s = new Image();
              (s.dataset.taskId = e.id), (s.src = w);
              let l = document.createElement("div");
              l.classList.add("delete-item-btn"),
                l.appendChild(s),
                (l.dataset.taskId = e.id),
                (l.dataset.btn = "delete"),
                l.addEventListener("click", (t) => {
                  (C = e.id),
                    console.log(C),
                    ((n, e) => {
                      const t = x(n),
                        i = ((n, e) => {
                          const t = x(n);
                          for (let n in t)
                            if ("tasks" === n) {
                              const i = t[n].findIndex((n) => n.id === e);
                              if (i) return i;
                            }
                        })(n, e);
                      t.tasks.splice(i, 1), f(v, n);
                    })(S, C),
                    O(n);
                });
              let p = new Image();
              (p.dataset.taskId = e.id), (p.src = k);
              let b = document.createElement("div");
              b.classList.add("edit-item-btn"),
                b.appendChild(p),
                (b.dataset.taskId = e.id),
                (b.dataset.btn = "edit"),
                b.addEventListener("click", () => {
                  (C = e.id),
                    (u.value = e.name),
                    (m.value = e.description),
                    (h.value = e.priority),
                    (g.value = e.date),
                    N(document.querySelector("#task-modal"));
                }),
                t.appendChild(i),
                t.appendChild(a),
                t.appendChild(o),
                t.appendChild(d),
                t.appendChild(b),
                t.appendChild(l),
                c.appendChild(t);
            });
        }
        i.addEventListener("submit", (n) => {
          n.preventDefault();
          const e = a.value;
          null != e &&
            "" !== e &&
            (((n, e) => {
              if (v.find((e) => e.name === n)) {
                const t = y(n + "1", e);
                v.push(t);
              } else {
                const t = y(n, e);
                v.push(t);
              }
              f(v);
            })(e, "defaultImg"),
            q(),
            (a.value = ""),
            T());
        }),
          r.addEventListener("click", q),
          t.addEventListener("click", function (e) {
            (S = e.target.dataset.listId),
              f(n, S),
              "p" === e.target.tagName.toLowerCase() && (T(), (E = x(S)), O(E)),
              "edit" == e.target.dataset.btn &&
                (function (n) {
                  const e = document.querySelector("#list-modal");
                  console.log(e);
                  const t = document.querySelector(".list-name-input"),
                    i = document.querySelector(".list-title"),
                    r = x(n);
                  (t.value = r.name),
                    (i.innerHTML = r.name),
                    e.classList.add("active"),
                    s.classList.add("active"),
                    T();
                })(S),
              "delete" == e.target.dataset.btn &&
                (((n) => {
                  const e = ((n) => v.findIndex((e) => e.id === n))(n);
                  v.splice(e, 1), f(v, n);
                })(S),
                T());
          }),
          l.forEach((n) => {
            n.addEventListener("click", () => {
              j(document.querySelector(".modal.active"));
            });
          }),
          d.addEventListener("submit", (n) => {
            n.preventDefault();
            const e = document.querySelector(".modal.active"),
              t = document.querySelector(".list-name-input");
            null != t &&
              "" != t &&
              (((n, e, t) => {
                const i = x(n);
                (i.name = e), (i.icon = "default"), f(v, n);
              })(S, t.value),
              T(),
              j(e),
              q());
          }),
          s.addEventListener("click", () => {
            j(document.querySelector(".modal.active"));
          }),
          c.addEventListener("click", function (e) {
            if (
              (console.log("select task fcn called"),
              "input" === e.target.tagName.toLowerCase())
            ) {
              const t = e.target.dataset.listId,
                i = x(t);
              (i.tasks.find((n) => n.id === e.target.dataset.id).complete =
                e.target.checked),
                f(n, t),
                O(i);
            }
          }),
          T(),
          D();
      })();
    })();
})();
