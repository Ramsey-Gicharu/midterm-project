"use strict";
(() => {
var exports = {};
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "next/dist/shared/lib/constants"
const constants_namespaceObject = require("next/dist/shared/lib/constants");
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./library/mongo.js

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
    throw new Error("Please define the MONGO_URL environment variable inside .env.local");
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = external_mongoose_default().connect(MONGO_URL, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/* harmony default export */ const mongo = (dbConnect);

;// CONCATENATED MODULE: ./models/Food.js

const FoodSchema = new (external_mongoose_default()).Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
/* harmony default export */ const Food = ((external_mongoose_default()).models.Food || external_mongoose_default().model("Food", FoodSchema));

;// CONCATENATED MODULE: ./pages/api/foods/index.js



async function handler(req, res) {
    const { method  } = req;
    mongo();
    if (method === "GET") {
        try {
            const foods = await Food.find({}); // get all the foods
            res.status(200).json(foods);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    if (method === "POST") {
        try {
            const food = await Food.create(req.body);
            res.status(201).json(food);
        } catch (err1) {
            res.status(500).json(err1);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(881));
module.exports = __webpack_exports__;

})();