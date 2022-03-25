import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import TablePagination from '@material-ui/core/TablePagination'


const useStyles = makeStyles((theme) =>({
  appBar:{
    backgroundColor: "#fff"
  },
  hero:{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1568442258448-3247f8a7d7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1485&q=80")`,
    height: '500px',
    backgroundPosition: 'center',
    bakcgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3rem"
    }
  },
  blogsContainer:{
    paddingTop: theme.spacing(3)
  },
  blogTitle:{
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card:{
    maxWidth: '100%'
  },
  media:{
    height: 240
  },
  cardActions:{
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  author:{
    display: 'flex'
  },
  paginationContainer:{
    display:"flex",
    justifyContent: "center"
  }
}));

function CardDisplay({styles, image, avatar}){
  return(
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="coding"
                        className={styles.media}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          React useContext
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with over 6,000
                          species, ranging across all continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions className={styles.cardActions}>
                          <Box className={styles.author}> 
                              <Avatar 
                                src = {avatar}/>
                              <Box ml={2}>
                                  <Typography variant="subtitle2" component="p">
                                      Guy Clemmons
                                  </Typography>
                                  <Typography variant="subtitle2" color="textSecondary" component="p">
                                      May 14th, 2020
                                  </Typography>
                              </Box>
                          </Box>
                          <Box>
                            <BookmarkBorderIcon/>
                          </Box>
                      </CardActions>
                  </Card>
  )
}

function App() {

  const classes = useStyles()

  return (
    <div >
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
            <Typography variant="h6" color="primary">
              Blog
            </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
              Articles
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <CardDisplay styles={classes} image="https://images.unsplash.com/photo-1556244573-c3686c0f0e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
                    avatar="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardDisplay styles={classes} image="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" 
                  avatar="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />                    
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardDisplay styles={classes} image="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  avatar="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80" />                                        
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <CardDisplay styles={classes} image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  avatar="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />                                       
                </Grid>
            </Grid>
            <Box my={4} className={classes.paginationContainer}>
              <TablePagination count={10}/>
            </Box>
      </Container>
    </div>
  );
}

export default App;
