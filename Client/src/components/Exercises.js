import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


export const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

    // Check if exercises is an array before slicing
    let currentExercises = [];
    if (Array.isArray(exercises)) {
        currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    } else {
        console.error('Expected an array for exercises, but got something else.');
    }

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({
            top: 1800, behavior: 'smooth'
        })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions);
            } else {
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }
            setExercises(exercisesData);
        }

        fetchExercisesData();
    }, [bodyPart])


    console.log(exercises);
    return (
        <Box id='exercises'
            sx={{
                mt: { lg: '100px' }
            }}
            mt="50px"
            p="20px"
        >
            <Typography
                variant='h3'
                mb='46px'
            >
                Showing Results
            </Typography>
            <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
                flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}

            </Stack>
            <Stack mt='100px' alignItems='center'>
                {exercises.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size='large'
                    />
                )}
            </Stack>
        </Box >
    )
}

export default Exercises;
