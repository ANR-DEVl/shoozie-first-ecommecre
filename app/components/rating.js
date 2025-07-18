'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BRating() {
    const [value, setValue] = useState(4);

    return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        />
        
    </Box>
    );
}


