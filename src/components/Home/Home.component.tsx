import React from "react";

import {Box, BoxTitle, BoxText, BoxContainer } from "./Home.styles";
import {data} from './Home.data'

const Home = () => {

    return (
        <BoxContainer>
            {data.map((item) => (
                <Box key={item.id} bgColor={item.bgColor}>
                    <BoxTitle>{item.title}</BoxTitle>
                    <BoxText>{item.text}</BoxText>
                </Box>
            ))}

        </BoxContainer>
    )
}

export default Home;