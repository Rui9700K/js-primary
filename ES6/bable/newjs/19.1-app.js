"use strict";

var _ = require("./19.1-\u6A21\u57571.js");

var m1 = _interopRequireWildcard(_);

var _2 = require("./19.1-\u6A21\u57572.js");

var m2 = _interopRequireWildcard(_2);

var _3 = require("./19.1-\u6A21\u57573.js");

var m3 = _interopRequireWildcard(_3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1); //入口文件

//模块引入

console.log(m2);
console.log(m3);

(0, _jquery2.default)('body').css('background', 'pink');