
const justifyMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  around: 'space-around',
  between: 'space-between',
};

const alignMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
};

const handleFlex = ({ flex, inlineFlex }) => {
  let display;
  if (inlineFlex) display = { style: 'inline-flex', value: inlineFlex };
  if (flex) display = { style: 'flex', value: flex };
  if (!display) {
    return '';
  }
  if (typeof display.value === 'string') {
    const flexType = display.value.split(' ');
    return `
      display: ${display.style};
      justify-content: ${justifyMap[flexType[0]] || 'center'};
      align-items: ${alignMap[flexType[1]] || 'center'};
    `;
  } else {
    const { layout = 'center center', direction = 'row' } = display.value;
    const flexType = layout.split(' ');
    return `
      display: ${display.style};
      justify-content: ${justifyMap[flexType[0]]};
      align-items: ${alignMap[flexType[1]]};
      flex-direction: ${direction};
    `;
  }
};

const handlePosition = ({ fixed, relative, absolute }) => {
  let position;
  if (relative) position = { style: 'relative', value: relative };
  if (absolute) position = { style: 'absolute', value: absolute };
  if (fixed) position = { style: 'fixed', value: fixed };
  if (position) {
    const { value = {} } = position;
    const { zIndex = '1', top, bottom, left, right } = value;
    return `
      z-index: ${zIndex};
      position: ${position.style};
      ${top ? `top: ${top}` : ''}
      ${bottom ? `bottom: ${bottom}` : ''}
      ${left ? `left: ${left}` : ''}
      ${right ? `right: ${right}` : ''}
    `;
  }
  return '';
};

export default (props) => {
  return `
    ${handleFlex(props)}
    ${handlePosition(props)}
  `;
};