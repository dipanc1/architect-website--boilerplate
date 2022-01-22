import React from 'react';
import PropTypes from 'prop-types';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import WorkIcon from '@material-ui/icons/Work';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';
import { Fab } from '@material-ui/core';
import Maps from '../components/Maps';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 1400,
  },
  icon: {
    marginRight: 15,
  },
  mapContainer: {
    marginTop: 15,
  }
});

const contact = [
  {
    name: 'Rishav Jindal',
    title: 'Principal Designer',
    email: 'rishavjindal05@gmail.com',
    phone: '+91-97804-92458',
    address: 'SCO 16, Barnala Square, Nanaksar Road, Barnala, Punjab 148101',
  },
]

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <>
      <Container className={classes.root} component="section" id='Contact'>
        <Button className={classes.button}>
          <Typography variant="h4" component="span">
            Contact
          </Typography>
        </Button>
        <div className={classes.mapContainer
        }>
          <Maps />
        </div>
        {contact.map(contact => (
          <div key={contact}>
            <Typography variant="subtitle1" className={classes.link}>
              <Fab color='primary' size='medium' className={classes.icon}>
                <PermIdentityIcon />
              </Fab>
              {contact.name}
            </Typography>
            <Typography variant="subtitle1" className={classes.link}>
              <Fab color='primary' size='medium' className={classes.icon}>
                <WorkIcon />
              </Fab>
              {contact.title}
            </Typography>
            <Typography variant="subtitle1" className={classes.link}>
              <Fab color='primary' size='medium' className={classes.icon}>
                <MailOutlineIcon />
              </Fab>
              {contact.email}
            </Typography>
            <Typography variant="subtitle1" className={classes.link}>
              <Fab color='primary' size='medium' className={classes.icon}>
                <PhoneIcon />
              </Fab>
              {contact.phone}
            </Typography>
            <Typography variant="subtitle1" className={classes.link}>
              <Fab color='primary' size='medium' className={classes.icon}>
                <BusinessIcon />
              </Fab>
              {contact.address}
            </Typography>
          </div>
        ))}
      </Container>
    </>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);