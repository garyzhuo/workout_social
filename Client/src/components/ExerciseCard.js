import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';


// this is the exercise card that will display the exercise
const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction='row'>
                <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>

                <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography mL='21px' color='#000' fontWeight='bold' mt='50px' pb='10px'
                textTransform='capitalize' fontSize='21px' textAlign='center'>
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard