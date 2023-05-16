import React from 'react'
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png'

// this is the body part component that will display the body part and the icon
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        // using stack to display the body part and the icon
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            // on click, it will set the body part and scroll to the exercises
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            }}
        >
             {/* THIS IS THE NAVBAR ICON -- NOTET TO SELF, CHANGE THIS TO INVIDIUAL ICONS */}
            <img src={Icon} alt='dumbbell'
                style={{
                    width: '40px', height: '40px'
                }} />
            {/* This is the body part text */}
            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#3A1212'
                textTransform='capitalize'
            >
                {item}
            </Typography>
        </Stack >
    )
}

export default BodyPart;