import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import muscle from '../assets/images/lift.jpg';


const HeroBanner = () => {
    return (
        // mostly styling, but this is the landing page
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position="relative" p='20px'>
            {/* This will greet you with the landing page texts and images */}
            <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
                Fitness Club
            </Typography>
            {/* The warrior within text is the main text that will greet you */}
            <Typography fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb='23px' mt='30px'
            >
                Awaken the <br />warrior within.
            </Typography>
            {/* This will show you the button to take you to the exercises */}
            <Typography fontSize='22px' lineHeight='35px' mb={4}>
                Check out the most popular exercises
            </Typography>
            {/* This button will take you to the exercises */}
            <a href="#exercises" style={{ marginTop: '45px', textDecoration: 
            'none', width: '200px', textAlign: 'center',
             background: '#FF2625', padding: '14px', fontSize: '22px', 
             textTransform: 'none', color: 'white', borderRadius: '4px' }}>
                Explore Exercises
                </a>

            {/* This is the text that will display behind the image */}
            <Typography
                fontWeight={600}
                color='662625'
                sx={{
                    opacity: '0.1',
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize='200px'
            >
                Exercises
            </Typography>

            {/* the image source is coming from a component called muscle, with the styling
            being "hero-banner-img" */}
            <img src={muscle} alt="hero-banner" className="hero-banner-img" />
        </Box>
    )
}

export default HeroBanner