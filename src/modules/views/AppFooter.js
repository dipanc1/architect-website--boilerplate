import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <>
    <Typography>
      {'© ' + new Date().getFullYear()}
    </Typography>
    <Typography>
      {'Made With '}
      &#10084; {'by '}
      <Link color="inherit" href="https://www.instagram.com/dipanchhabra/" target={'_blank'}>
        {'Dipan'}
      </Link>
    </Typography>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      // backgroundColor: theme.palette.warning.dark,
      width: 55,
      height: 55,
      transition: 'opacity 1s ease-in-out',
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="row"
              justifyContent='flex-start'
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.facebook.com/dipanc1/" target={'_blank'} rel="noreferrer" >
                  <img src="/img/facebook.png" alt="Facebook" height={50} width={50} className={classes.icon}/>
                </a>
                <a href="https://www.instagram.com/dipanchhabra/" target={'_blank'} rel="noreferrer">
                  <img src="/img/instagram.png" alt="Instagram" height={50} width={50} className={classes.icon}/>
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Guide Links
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#Projects">Projects</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#Contact">Contact</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
