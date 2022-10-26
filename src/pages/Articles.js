import { Box, Grid, Pagination } from "@mui/material"
import { NewArticle } from "../components/Card"

const Articles = ()=>{
    return(
            <Grid container>
                <Grid container>
                        <Box component="h2">Programming</Box>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={4} p={1}>
                        <NewArticle />
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' mt={5}>
                    <Grid item>
                        <Pagination count={1} color="primary" />   
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Articles;