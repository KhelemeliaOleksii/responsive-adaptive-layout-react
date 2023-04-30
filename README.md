# Create adaptive and responsive layouts with React and Styled-Components 

## Matherial from
1. Carlos Queiroz [Creating responsive and adaptive layouts with React and Styled-Components](https://dev.to/carloscne/creating-responsive-and-adaptive-layouts-with-react-and-styled-components-1ghi)
2. GoIT online course

In this project I wanted to use Carlos's **px2vw** function. It's cool approach. 

But on my opiniion more convinent solution is to use css property **flex-basis** for cards and negative displacement (**margin-left**, **margin-top**) for cards container. I have met this practice in **GoIT online Full Stack course**. 

For example, 2 cards for a tablet device with **margin-left: 20px** between the cards. 

### Container's rule
```
@media screen and (min-width: ${device_width.TABLET}px) {
    flex-basis: calc(100% / 2 - 20px );
}
```
            display: flex;
            flex-wrap: wrap;
            margin-left: -20px;
            margin-top: -20px;
### Card's rule
```
@media screen and (min-width: ${device_width.TABLET}px) {
    flex-basis: calc(100% / 2 - 20px );
    margin-top: 20px;
}
```
For users there is no visual top and left displacements in the last per row and column cards 