import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
      opacity: 1,
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    opacity: 0,
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        '/img/1.jpg',
      title: 'Layout',
      width: '40%',
    },
    {
      url:
        '/img/8.jpg',
      title: 'Design 4',
      width: '20%',
    },
    {
      url:
        '/img/2.jpg',
      title: 'Interior Designing',
      width: '40%',
    },
    {
      url:
        '/img/7.jpg',
      title: 'Design  3',
      width: '38%',
    },
    {
      url:
        '/img/3.jpg',
      title: 'Designing',
      width: '38%',
    },
    {
      url:
        '/img/6.jpg',
      title: 'Design 2',
      width: '24%',
    },
    {
      url:
        '/img/4.jpg',
      title: 'Planning',
      width: '40%',
    },
    {
      url:
        '/img/5.jpg',
      title: 'Design 1',
      width: '20%',
    },
    {
      url:
        '/img/1.jpg',
      title: 'Bunglow',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section" id='Projects'>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Projects & Designs
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);