(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 454:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Featured_container__djdhp",
	"arrowContainer": "Featured_arrowContainer__eRP7q",
	"wrapper": "Featured_wrapper__Up3ZO",
	"imgContainer": "Featured_imgContainer__bP_Gp"
};


/***/ }),

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 468:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Menu_container__Fpb7q",
	"desc": "Menu_desc__vFbKu",
	"wrapper": "Menu_wrapper__eeJFb",
	"title": "Menu_title__gury6"
};


/***/ }),

/***/ 856:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MenuCard_container___vW33",
	"title": "MenuCard_title___9URL",
	"price": "MenuCard_price___QID7",
	"desc": "MenuCard_desc__OXZDy"
};


/***/ }),

/***/ 510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(454);
/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Featured = ()=>{
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const images = [
        "/img/fries.jpg",
        "/img/cheese beef burger.jpg",
        "/img/Hawaiian.jpg"
    ];
    const sliderArrow = (direction)=>{
        if (direction === "left") {
            setIndex(index !== 0 ? index - 1 : 0);
        }
        if (direction === "right") {
            setIndex(index !== 2 ? index + 1 : 2);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),
                style: {
                    left: 0
                },
                onClick: ()=>sliderArrow("left"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/img/leftarrow.png",
                    alt: "",
                    layout: "fill",
                    objectFit: "contain"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
                style: {
                    transform: `translateX(${-100 * index}vw)`
                },
                children: images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: image,
                            alt: "",
                            layout: "fill",
                            objectFit: "contain"
                        })
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),
                style: {
                    right: 0
                },
                onClick: ()=>sliderArrow("right"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: "/img/rightarrow.png",
                    layout: "fill",
                    alt: "",
                    objectFit: "contain"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Featured);


/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Menu.module.css
var Menu_module = __webpack_require__(468);
var Menu_module_default = /*#__PURE__*/__webpack_require__.n(Menu_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/MenuCard.module.css
var MenuCard_module = __webpack_require__(856);
var MenuCard_module_default = /*#__PURE__*/__webpack_require__.n(MenuCard_module);
;// CONCATENATED MODULE: ./components/MenuCard.jsx



const MenuCard = ({ menuItem  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MenuCard_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: menuItem.img,
                alt: "",
                width: "160",
                height: "160"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (MenuCard_module_default()).title,
                children: menuItem.title
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (MenuCard_module_default()).price,
                children: [
                    "khs",
                    menuItem.price
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (MenuCard_module_default()).desc,
                children: menuItem.desc
            })
        ]
    });
};
/* harmony default export */ const components_MenuCard = (MenuCard);

;// CONCATENATED MODULE: ./components/Menu.jsx



const Menu = ({ menuItem  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Menu_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                classNamenuSe: (Menu_module_default()).title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (Menu_module_default()).desc,
                children: " "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Menu_module_default()).wrapper,
                children: menuItem.map((menuItem)=>/*#__PURE__*/ jsx_runtime_.jsx(components_MenuCard, {
                        menuItem: menuItem
                    }, menuItem.id))
            }),
            "s"
        ]
    });
};
/* harmony default export */ const components_Menu = (Menu);


/***/ }),

/***/ 369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(924);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Featured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(510);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(477);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(399);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Home({ menuItem  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Food Order Management App"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Food ordering app service"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Featured__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                menuItem: menuItem
            })
        ]
    });
}
const getServerSideProps = async ()=>{
    const res = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("http://localhost:3000/api/foods");
    return {
        props: {
            menuItem: res.data
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ 924:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(369)));
module.exports = __webpack_exports__;

})();