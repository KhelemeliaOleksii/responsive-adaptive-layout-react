import styled from 'styled-components'
import px2vw from '../../utils/px2vw'
import device_width from '../../consts/device_width'

export const BoxContainer = styled.div`
        display: block;
        /* pasdding: 0 15px; */
        @media screen and (min-width: ${device_width.TABLET}px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-left: -20px;
            margin-top: -20px;
            /* margin: ${px2vw(32, device_width.TABLET)}; */
            /* max-width: 100%; */
        }
        @media screen and (min-width: ${device_width.DESKTOP}px) {
            margin-left: -15px;
            margin-top: -15px;
            /* margin: ${px2vw(32, device_width.TABLET)}; */
            /* max-width: 100%; */
        }
`

export const Box = styled.div<{ bgColor: string }>`
    display: block;
    width: 100%;
    /* min-height: 500px; */
    /* width: ${px2vw(device_width.MOBILE - 20, device_width.MOBILE)}; */
    min-height: ${px2vw( device_width.MOBILE * 1 / 3, device_width.MOBILE)};
    /* margin: ${px2vw(10, device_width.MOBILE)}; */
    background-color: ${props => props.bgColor};
    /* height: 100%; */
    @media screen and (min-width: ${device_width.TABLET}px){
        flex-basis: calc(100% / 2 - 20px );
        margin-left: 20px;
        margin-top: 20px;
    }
    @media screen and (min-width: ${device_width.DESKTOP}px){
        flex-basis: calc(100% / 4 - 15px);
        margin-left: 15px;
        margin-top: 15px;
    }
`
export const BoxTitle = styled.h3`
    text-align: center;
    padding: 15px;
    font-size: 30px;
    color: black;
`
export const BoxText = styled.p`
    text-align: center;
    font-size: 20px;
    color: white;
    margin-bottom: 15px;
`