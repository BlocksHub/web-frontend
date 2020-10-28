"use strict";function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}request("/auth/moderation/history","GET").then(function(a){var b=$("#moderation-history").empty();if(0===a.length)return void b.append("<p>Your account has no moderation history. Good job :)</p>");b.append("\n        \n        <div class=\"row\">\n            <div class=\"col-12\">\n                <table class=\"table\">\n                    <thead>\n                    <tr>\n                        <th scope=\"col\" style=\"border-top: none;\">#</th>\n                        <th scope=\"col\" style=\"border-top: none;\">Reason</th>\n                        <th scope=\"col\" style=\"border-top: none;\">Date</th>\n                        <th scope=\"col\" style=\"border-top: none;\">Expired</th>\n                        <th scope=\"col\" style=\"border-top: none;\">Terminated?</th>\n                    </tr>\n                    </thead>\n                    <tbody></tbody>\n                </table>\n            </div>\n        </div>\n        \n        ");var c,d=b.find("tbody"),e=_createForOfIteratorHelper(a);try{for(e.s();!(c=e.n()).done;){var f=c.value,g="No";1===f.terminated&&(g="Yes"),d.append("\n        <tr>\n            <th scope=\"row\">".concat(f.moderationActionId,"</th>\n            <td>").concat(xss(f.reason),"</td>\n            <td>").concat(moment(f.createdAt).fromNow(),"</td>\n            <td>").concat(moment(f.until).fromNow(),"</td>\n            <td>").concat(g,"</td>\n        </tr>\n        "))}}catch(a){e.e(a)}finally{e.f()}})["catch"](function(a){void 0,warning(a.responseJSON.message)});