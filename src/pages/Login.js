import { LockSharp, LoginOutlined } from "@mui/icons-material";
import { Container, Grid, Typography, Link, Box, TextField, Button, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const Login = ()=>{
    return(
        <Container>
            <Grid container mt={10}>
                <Grid item xs={12} textAlign='center'>
                    <LockSharp sx={{fontSize:'50px'}} color='primary' />
                    <Typography variant='h5' component='div'>
                        Sign In
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{margin: {lg:'0 350px', md: '0 250px', sm: '0 100px'}}}>
                <form className="form-log">
                    <TextField id="outlined-basic" fullWidth margin='normal' label="User Name" name="uname" variant="outlined" />
                    <TextField id="outlined-password-input" fullWidth margin='normal' label="Password" name="pass" type="password" />
                    <FormGroup sx={{margin: '10px 0'}}>
                        <FormControlLabel control={<Checkbox />} label='Remember Me' />
                    </FormGroup>
                    <Button variant='contained' type="submit" sx={{width: '100%'}} color='primary'>Sign In</Button>
                </form>
                <Grid container justifyContent='space-between'>
                    <Grid item  mt={2}>
                        <Link href='/restpass'>Forgot password?</Link>
                    </Grid>
                    <Grid item  mt={2}>
                        <Link href='/signup'> Don't have an account? Sign Up </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login;