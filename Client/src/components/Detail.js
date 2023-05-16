import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

// This is the detail page for the exercises
const Detail = ({ exerciseDetail }) => {
    // we are destructuring the exerciseDetail
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    // this is the extra detail that will be displayed on the page
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]

    // this is the return for the detail page
    return (
        <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignitems: 'center' }}>
            <img src={gifUrl} alt={name} Loading='lazy' className='detail-image' />
            <Stack sx={{
                gap: { lg: '35px', xs: '20px' }
            }}>
                <Typography variant='h3' fontWeight='550' mt='50px' textTransform='capitalize'>
                    {name}
                </Typography>
                {/* // this is the text that will be displayed on the detail page */}
                <Typography variant='h6' mt='20px'>
                    {name} is one of the best exercises for your {bodyPart} and {target}. <br />
                    It is a {equipment} exercise that primarily targets the {target} and to a lesser degree also targets the {bodyPart}.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{
                            background: 'fff2db',
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px'
                        }}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail