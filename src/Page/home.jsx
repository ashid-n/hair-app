import React from 'react';
import homepage from '../assets/63ce59905d68375518f1279f1456b71b.jpg';
import { Box, styled } from "@mui/material";

const Image = styled("img")`
  width: 100%; 
  height: 100%; 
  object-fit: cover;
`;
const home = () => {
    return (
        <>
            <Box >
                <div className='img'>
                    <Image src={homepage} alt='image' />
                </div>
            </Box>
        </>
    );
};

export default home;

