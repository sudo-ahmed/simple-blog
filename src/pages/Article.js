import { Person } from "@mui/icons-material";
import { Grid, Typography, List, ListItemAvatar, ListItem, ListItemText, Container, Divider, Button } from "@mui/material"

const Article = ()=>{
    return(
        <Container>
            <Grid container>
                <Grid item xs={12} sx={{textAlign: 'center'}}>
                    <img src='/web.png' alt='web Developer' height='250px' width='50%' />
                </Grid>
                <Grid item xs={12} sx={{margin:{md:'0 100px'}}}>
                    <Typography variant='h4' component='h3'>
                        Title Number 1
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Typography variant='h4' component='h3'>
                        Title Number 1
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Typography variant='h4' component='h3'>
                        Title Number 1
                    </Typography>
                    <Typography variant='body2' component='p'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                   
                </Grid>
                <Grid item xs={12} sx={{margin:{md:'20px 100px'}}}>
                    <Divider />
                </Grid>
                <Grid container sx={{margin:{md:'0 100px'}}}>
                    <Grid item xs={12}>
                        <Typography variant='h5' component='div'>
                            Comments (3)
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Person />
                                </ListItemAvatar>
                                <ListItemText primary='Ahmed Tarek' secondary='Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... ' />
                            </ListItem>
                            <Divider />
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Person />
                                </ListItemAvatar>
                                <ListItemText primary='Ahmed Tarek' secondary='Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... ' />
                            </ListItem>
                            <Divider />
                            <ListItem alignItems='flex-start'>
                                <ListItemAvatar>
                                    <Person />
                                </ListItemAvatar>
                                <ListItemText primary='Ahmed Tarek' secondary='Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... Some Text Here Please ... ' />
                            </ListItem>
                            <Divider />
                        </List>
                        <form>
                            <textarea placeholder="Add Your Commnet" rows={4} className="comment-input" />
                            <Button type="submit" color='warning' variant='outlined'>Add Comment</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Article;