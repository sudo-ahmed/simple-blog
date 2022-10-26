import {Button, Grid, Divider, Box} from '@mui/material';
import { NewArticle, MostViwe } from '../components/Card';
const Home = ()=>{
    return(
        <>
            <Grid container>
                <Grid item xs={12} md={8} sx={{pl:{md: 5}, pr:{md: 5}}}>
                    <Grid item xs={12} p={1}>
                        <h2>New Articles</h2>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={6} p={1}>
                            <NewArticle />
                        </Grid>
                        <Grid item xs={12} sm={6} p={1}>
                            <NewArticle />
                        </Grid>
                        <Grid item xs={12} sm={6} p={1}>
                            <NewArticle />
                        </Grid>
                        <Grid item xs={12} sm={6} p={1}>
                            <NewArticle />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Divider>
                            <Button href='/programming' color='warning'>
                                View All
                            </Button>
                        </Divider>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} sx={{pl:{lg: 5}, pr:{lg: 5}}}>
                    <Grid item xs={12} p={1}>
                        <Box component="h2">Most Views</Box>
                    </Grid>
                    <Grid container>
                        <Grid item md={12} sm={6} p={1}>
                            <MostViwe />
                        </Grid>
                        <Grid item md={12} sm={6} p={1}>
                            <MostViwe />
                        </Grid>
                        <Grid item md={12} sm={6} p={1}>
                            <MostViwe />
                        </Grid>
                        <Grid item md={12} sm={6} p={1}>
                            <MostViwe />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}



export default Home