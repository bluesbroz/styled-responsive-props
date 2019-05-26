/**
 * defaults:
 * xs >= 0, sm > 425, md > 768, lg > 1024, xl > 1200
 * */
function parseMediaKey(key){
  switch(key){
    case 'xs': return 0;
    case 'sm': return 426;
    case 'md': return 769;
    case 'lg': return 1025;
    case 'xl': return 1201;
    default: return parseInt(key);
  }
}

function mediaBreakpoint(number, val){
  if (number === 0) return `${val}\n`;
  return `@media (min-width: ${number}px){ ${val} }\n`
}

const responsiveProps = respPropsList => props => {
  let result = '';

  respPropsList.forEach(respProp => {
    let propName, defaultVal;

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
        result += props[propName]
          .split('|')
          .map(el => el.split(':'))
          .map(([key, val]) => mediaBreakpoint(parseMediaKey(key), `${propName}: ${val};`))
          .join('')
      } else {
        result += `${propName}: ${props[propName]};\n`;
      }
    } else if (defaultVal) {
      result += `${propName}: ${defaultVal};\n`;
    }
  });

  return result;
};

module.exports = responsiveProps;