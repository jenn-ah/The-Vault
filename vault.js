'use strict';
module.exports = function () {
  let obj = {};
  let setValue = function (key, value) {
    if (!key) {
      return null;
    } else {
      obj[key] = value;
    }
  }
  let getValue = function (key) {
    if (!key || !obj[key]) {
      return null;
    } else {
      return obj[key];
    }
  }
  return { setValue, getValue };
};
