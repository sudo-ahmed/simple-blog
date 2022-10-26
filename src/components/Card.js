import { Person } from '@mui/icons-material';
import {Box, Typography, Card, CardActionArea, CardContent, CardMedia, Grid, Avatar} from '@mui/material';

export const MostViwe = ()=>{
    return(
        <Card sx={{ display: 'flex' }}>
            <CardMedia component="img" sx={{ width: '30%' }} image="web.png" alt="Web pic" />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                    Live From Space
                    </Typography>
                    <Grid container>
                        <Grid item>
                            <Avatar className="avatar">
                                <Person />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography className="details-card" color="text.secondary" component="div">
                                Ahmed Tarek
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
      </Card>
  
    )
}

export const NewArticle = ()=>{
    return(
        <Card>
            <CardActionArea href='/programming/article'>
                <CardMedia component="img" sx={{objectFit: 'fill'}}  height="140" image="/web.png" alt="web icon" />
                <CardContent>
                    <Typography gutterBottom variant="body2" color="error" component="div">
                        Programming
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        New Article In Blog
                    </Typography>
                    <Grid container justifyContent="space-between">
                        <Grid container xs={6}>
                            <Grid item>
                                <Avatar className="avatar">
                                    <Person />
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography className="details-card" color="text.secondary" component="div">
                                    Ahmed Tarek
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className="details-card" color="text.secondary" component="div">
                                5 Aug 2021
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
