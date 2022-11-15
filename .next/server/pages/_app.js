(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 852:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__iN3aW",
	"item": "Footer_item__ikrg0",
	"card": "Footer_card__RLUtm",
	"title": "Footer_title__ZStl1",
	"text": "Footer_text__TFiKo",
	"motto": "Footer_motto__0f9zG"
};


/***/ }),

/***/ 392:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Navbar_container__rxFeS",
	"item": "Navbar_item__03eIQ",
	"callButton": "Navbar_callButton__LuClE",
	"texts": "Navbar_texts__nL5pb",
	"text": "Navbar_text__JLMGY",
	"list": "Navbar_list__h0uMs",
	"listItem": "Navbar_listItem__twU0F",
	"cart": "Navbar_cart__SbQah",
	"counter": "Navbar_counter__GLebN"
};


/***/ }),

/***/ 473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Footer_module_default()).item,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/img/footerimage.jpg",
                    objectFit: "cover",
                    layout: "fill",
                    alt: ""
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Footer_module_default()).card,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: (Footer_module_default()).motto,
                            children: "Campus Delight Here to serve You"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).card,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Footer_module_default()).title,
                                children: "WORKING HOURS"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Footer_module_default()).text,
                                children: [
                                    "MONDAY UNTIL FRIDAY",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " 7:00 – 21:00"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Footer_module_default()).text,
                                children: [
                                    "SATURDAY - SUNDAY",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " 10:00 – 20:00"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./styles/Navbar.module.css
var Navbar_module = __webpack_require__(392);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.jsx




const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Navbar_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Navbar_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Navbar_module_default()).callButton,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/telephone.png",
                            width: "60",
                            height: "50",
                            alt: "phone"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Navbar_module_default()).texts,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Navbar_module_default()).text,
                                children: "Order Now"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (Navbar_module_default()).text,
                                children: " 1233 4564 4357"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Navbar_module_default()).item,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (Navbar_module_default()).list,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Navbar_module_default()).listItem,
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/logo.png",
                            width: "130",
                            height: "130",
                            alt: "logo"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Navbar_module_default()).listItem,
                            children: " Menu"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Navbar_module_default()).item,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Navbar_module_default()).cart,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/img/cart.png",
                            width: "50",
                            height: "40",
                            alt: "user"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Navbar_module_default()).counter,
                            children: "2"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(931);
;// CONCATENATED MODULE: ./pages/_app.js



// add bootstrap css 

function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 931:
/***/ (() => {



/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(473)));
module.exports = __webpack_exports__;

})();