import {Button, IconButton, InputAdornment, Grid,Input, TextField, Box} from '@mui/material';
import {Search} from '@mui/icons-material';
import Nav from './Nav'
import Drawers from './Drawer';
const Header = ()=>{
    return(
        <>
            <Grid container justifyContent='space-between'>
                <Grid item>
                    <Button variant='outlined' href='/' sx={{color: 'black', borderRadius: '0' ,borderColor:'black'}}>
                        My Blog
                    </Button>
                </Grid>
                <Grid item sx={{display:{xs: 'none', sm: 'block'}}}>
                    <Box component="form">
                        <Input 
                            type='search' 
                            endAdornment={ 
                                <InputAdornment position="end"> 
                                    <IconButton type='submit'>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder='Search'
                        />
                    </Box>
                </Grid>
                <Grid item sx={{display:{xs: 'none', sm: 'block'}}}>
                    <Button variant='contained' sx={{backgroundColor: '#3519d2'}} href='/login'>Sign In</Button>
                </Grid>
                <Grid item sx={{display:{xs: 'block', sm: 'none'}}}>
                    <Drawers />
                </Grid>
            </Grid>
            <Grid container item sx={{display:{xs: 'none', sm: 'block'}}}>
                <Nav />
            </Grid>
        </>
    )
}

export default Header