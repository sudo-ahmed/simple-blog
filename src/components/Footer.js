import { YouTube, Facebook, Twitter, Instagram } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

const Footer = ()=>{
    return(
        <>
            <Grid container justifyContent='center' mt={5} p={5} sx={{backgroundColor: '#3519d2', color: 'white'}}>
                <Grid item>
                    <Typography variant='body1'>
                        Create By Ahmed Tarek
                    </Typography>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Facebook />
                        <YouTube />
                        <Twitter />
                        <Instagram />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer