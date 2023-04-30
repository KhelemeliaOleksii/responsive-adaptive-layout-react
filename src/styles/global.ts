import {createGlobalStyle} from 'styled-components';
// add  rule to tsconfig.json
// {
//     "compilerOptions": {
//       ...
//       "baseUrl": "./src",
//       "paths": {
//         "@/*": [
//           "*"
//         ]
//       }
//       ...
//     },
//   }
// and use with pleasure
import px2vw from '../utils/px2vw';
import viewport_width from '../consts/device_width';

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    :root{
        font-size: ${px2vw(24)};
        @media screen and (min-width: ${viewport_width.TABLET}px) {
            font-size: ${px2vw(18)}px;
        }
        @media screen and (min-width: ${viewport_width.DESKTOP}px) {
            font-size: ${px2vw(12)}px;
        }
    }
`
export default GlobalStyles; 