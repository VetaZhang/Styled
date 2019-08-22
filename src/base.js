import { css } from 'styled-components';

export const styleItem = (valueName, styleName, defaultValue = '') => {
  return (props) => {
    return props[valueName] ? `${styleName}: ${props[valueName]};` : defaultValue;
  };
}

// export const position = () => css`
//   ${styleItem('zIndex', 'z-index')}
//   ${styleItem('top', 'top')}
//   ${styleItem('bottom', 'bottom')}
//   ${styleItem('left', 'left')}
//   ${styleItem('right', 'right')}
// `;

// export const flex = () => css`
//   ${styleItem('flex', 'flex')}
//   ${styleItem('justifyContent', 'justify-content')}
//   ${styleItem('alignItems', 'align-items')}
//   ${styleItem('direction', 'flex-direction')}
// `;

export const size = () => css`
  ${styleItem('width', 'width')}
  ${styleItem('height', 'height')}
  ${styleItem('minWidth', 'min-width')}
  ${styleItem('minHeight', 'min-height')}
  ${styleItem('maxWidth', 'max-width')}
  ${styleItem('maxHeight', 'max-height')}
`;

export const margin = () => css`
  ${styleItem('margin', 'margin')}
  ${styleItem('marginTop', 'margin-top')}
  ${styleItem('marginBottom', 'margin-bottom')}
  ${styleItem('marginLeft', 'margin-left')}
  ${styleItem('marginRight', 'margin-right')}
`;

export const padding = () => css`
  ${styleItem('padding', 'padding')}
  ${styleItem('paddingTop', 'padding-top')}
  ${styleItem('paddingBottom', 'padding-bottom')}
  ${styleItem('paddingLeft', 'padding-left')}
  ${styleItem('paddingRight', 'padding-right')}
`;

export const bg = () => css`
  ${styleItem('bgColor', 'background-color')}
  ${styleItem('bgLinear', 'background-image')}
  ${({ bgImg }) => (bgImg ? `background-image: url(${bgImg});` : '')}
  ${styleItem('bgSize', 'background-size')}
  ${styleItem('bgPosition', 'background-position')}
  ${styleItem('bgRepeat', 'background-repeat')}
`;

export const border = () => css`
  ${styleItem('border', 'border')}
  ${styleItem('borderTop', 'border-top')}
  ${styleItem('borderBottom', 'border-bottom')}
  ${styleItem('borderLeft', 'border-left')}
  ${styleItem('borderRight', 'border-right')}
  ${styleItem('radius', 'border-radius')}
`;

export const text = () => css`
  ${styleItem('family', 'font-family')}
  ${styleItem('size', 'font-size')}
  ${styleItem('weight', 'font-weight')}
  ${styleItem('color', 'color')}
  ${styleItem('decoration', 'text-decoration')}
  ${styleItem('lineHeight', 'line-height')}
  ${styleItem('whiteSpace', 'white-space')}
  ${({ lineClamp }) => {
    return lineClamp ? `
      -webkit-line-clamp: ${lineClamp};
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      overflow : hidden;
    ` : '';
  }}
`;

export const others = () => css`
  ${styleItem('display', 'display')}
  ${styleItem('boxSize', ' box-size')}
  ${styleItem('boxShadow', ' box-shadow')}
  ${styleItem('overflow', 'overflow')}
  ${styleItem('opacity', 'opacity')}
  ${styleItem('verticalAlign', 'vertical-align')}
  ${styleItem('align', 'text-align')}
`;

export const baseStyle = () => css`
  ${size()}
  ${margin()}
  ${padding()}
  ${bg()}
  ${border()}
  ${text()}
  ${others()}
`;
