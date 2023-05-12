import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
    return (
        <Box sx={{
            mt: {lg: '100px', xs: '0px'}
        }}>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
            Muscle-Focused Workouts
            </Typography>
            <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ?
         <HorizontalScrollbar 
        data={targetMuscleExercises}/> 
    :  <Loader/>}
            </Stack>
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px" mt='44px'>
            Equipment-Based Exercises
            </Typography>
            <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ?
         <HorizontalScrollbar 
        data={equipmentExercises}/> 
    :  <Loader/>}
            </Stack>
        </Box>
    )
}

export default SimilarExercises