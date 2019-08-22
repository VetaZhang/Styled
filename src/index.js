import styled, { createGlobalStyle } from 'styled-components';
import { baseStyle } from './base';
import handleProps from './handler';

const { div, img } = styled;

export const SBlock = div`
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SInline = div`
  display: inline-block;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SFlex = div`
  display: ${( inline ) => (inline ? 'inline-flex' : 'flex')};
  justify-content: center;
  align-items: center;
  ${({ direction }) => (direction ? `flex-direction: ${direction};` : '')}
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SPara = div`
  white-space: normal;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SText = div`
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SImg = img`
  display: block;
  width: 100%;
  margin: auto;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SAvatar = div`
  ${({ size }) => (size ? `width: ${size};` : '')}
  ${({ size }) => (size ? `height: ${size};` : '')}
  ${({ size }) => (size ? `border-radius: ${size};` : '')}
  ${({ src }) => (src ? `background-image: url(${src});` : '')}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SCover = div`
  width: 100%;
  height: 100px;
  ${({ src }) => (src ? `background-image: url(${src});` : '')}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SButton = div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  ${({ height }) => (height ? `border-radius: ${height}` : '')}
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

export const SScroll = div`
  -webkit-overflow-scrolling: touch;
  ${(props) => handleProps(props)}
  ${baseStyle()}
`;

// export const Svg = styled.div`
//   width: ${({ width }) => width || '2.8rem'};
//   height: ${({ height }) => height || '2.8rem'};
//   float: ${({ float }) => float};

//   svg {
//     display: block;
//     width: 100%;
//     height: 100%;
//   }
// `;

const fontFaceTemplate = (name, url, format = 'opentype') => {
  return createGlobalStyle`
    @font-face {
      font-family: "${name}";
      src: url("https://cdn.image.huoqiuapp.com${url}") format("${format}");
      font-style: normal;
      font-weight: normal;
    }
  `;
};

export const FontDINProBold = fontFaceTemplate('DINProBold', '/share/fonts/DINPro-Bold.ttf', 'truetype');

export const FontDINProMedium = fontFaceTemplate('DINProMedium', '/fonts/DINPro-Medium.otf', 'truetype');

export const FontSFUIDisplay = fontFaceTemplate('SFUIDisplay', '/share/fonts/SF-UI-Display-Regular.ttf', 'truetype');

export const FontSFUIDisplayMedium = fontFaceTemplate('SFUIDisplayMedium', '/cdn/font/SF-UI-Display-Medium.otf');

export const FontGothamBook = fontFaceTemplate('GothamBook', '/share/fonts/Gotham-Book.otf');

export const FontGothamMedium = fontFaceTemplate('GothamMedium', '/cdn/font/Gotham-Medium.otf');
