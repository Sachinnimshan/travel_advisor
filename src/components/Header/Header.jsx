import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

function Header() {

    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display='flex'>
                    <Typography variant='h5'>
                        Explore New Places
                    </Typography>
                    {/* <Autocomplete>
                        <div>
                            <div>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder='Search...'/>
                        </div>
                    </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
