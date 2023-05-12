import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/flex.png'
import Logo2 from '../assets/images/vr.png'

const Footer = () => {
    return (
        <Box mt='80px'>
            {/* <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt='logo' width='200px' />
            </Stack> */}
<Typography     
    variant='h6' 
    pb='20px' 
    mt='20px' 
    fontWeight={600} 
    style={{ textAlign: 'center' }}>
<img src={Logo} width='20px' height='20px'/>
Jonah Angelo and Gary Zhuo: A Collaboration of Innovation.<img src={Logo2} width='20px' height='20px'/>
</Typography>
        </Box>
    )
}

export default Footer