"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * defaults:
 * xs >= 0, sm > 425, md > 768, lg > 1024, xl > 1200
 * */
function parseMediaKey(key) {
  switch (key) {
    case 'xs':
      return 0;

    case 'sm':
      return 426;

    case 'md':
      return 769;

    case 'lg':
      return 1025;

    case 'xl':
      return 1201;

    default:
      return parseInt(key);
  }
}

function mediaBreakpoint(number, val) {
  if (number === 0) return "".concat(val, "\n");
  return "@media (min-width: ".concat(number, "px){ ").concat(val, " }\n");
}

var responsiveProps = function responsiveProps(respPropsList) {
  return function (props) {
    var result = '';
    respPropsList.forEach(function (respProp) {
      var propName, defaultVal;

      if (typeof respProp === 'string') {
        propName = respProp;
      } else if (Array.isArray(respProp)) {
        propName = respProp[0];
        defaultVal = respProp[1];
      } else {
        throw new Error('Invalid type, must be String (prop name) or String[2] (prop name, default value)');
      }

      if (props.hasOwnProperty(propName)) {
        if (props[propName].indexOf(':') !== -1) {
          result += props[propName].split('|').map(function (el) {
            return el.split(':');
          }).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                val = _ref2[1];

            return mediaBreakpoint(parseMediaKey(key), "".concat(propName, ": ").concat(val, ";"));
          }).join('');
        } else {
          result += "".concat(propName, ": ").concat(props[propName], ";\n");
        }
      } else if (defaultVal) {
        result += "".concat(propName, ": ").concat(defaultVal, ";\n");
      }
    });
    return result;
  };
};

module.exports = responsiveProps;
