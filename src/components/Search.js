import { Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import "./Search.css";

const Search = () => {
    return (
        <div>
            <Stack direction="row" spacing={2} alignItems="center" >
                <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Search Movie:</Typography>
                <input id="searchbox" placeholder="Search Movie Here...">
                </input>
            </Stack>
        </div>
    )
}

export default Search
