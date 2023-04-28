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
import px2vw from '@/utils/px2vw';
import viewport_width from '@/consts/viewport_width';

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    :root{
        font-size: ${px2vw(24)};
        @media (min-width: ${viewport_width.TABLET}) {
            font-size: ${px2vw(18)};
        }
        @media (min-width: ${viewport_width.DESKTOP}) {
            font-size: ${px2vw(12)};
        }
    }
`
export default GlobalStyles; 