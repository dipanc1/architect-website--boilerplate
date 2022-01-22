import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = theme => ({
  title: {
    fontSize: 26,
    color: theme.palette.secondary.main,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.primary.light,
  },
  right: {
    flex: 65,
    display: 'flex',
    justifyContent: 'center',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.primary.light,
    marginLeft: theme.spacing(3),
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  extremeRight: {
    display: 'flex',
    flex: 25,
    width: 200,
    height: 60,
    justifyContent: 'flex-end',
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="#"
          >
            {'Jindal Architects'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="#Projects"
            >
              {'Projects'}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
            >
              {'/'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="#Contact"
            >
              {'Contact'}
            </Link>
          </div>
            <Link
              variant="h6"
              underline="none"
              className={classes.extremeRight}
              href="#"
            >
            <img src="/img/logo.jpeg" alt="" />
            </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);