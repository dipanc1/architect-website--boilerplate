import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '91vh',
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    right: 0,
    top: -175,
    bottom: 0,
    width: '100%',
    zIndex: -2,
  },
  arrowDown: {
    position: 'relative',
    bottom: theme.spacing(-18),
    filter: 'invert(100%) brightness(100%) contrast(100%)',
  },
});

function ProductHeroLayout(props) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/img/architect.png"
          alt="wonder"
          width="80"
          height="80"
        />
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} >
          <video autoPlay={true} preload="true" muted={true} loop={true} width={1519} height={835}>
            <source src="/video/background.mp4" type="video/mp4" />
          </video>
        </div>
        <a href="#Projects">
          <img
            className={classes.arrowDown}
            src="/img/down-arrow.png"
            height="50"
            width="50"
            alt="arrow down"
          />
        </a>
      </Container>
    </section>
  );
}

ProductHeroLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHeroLayout);