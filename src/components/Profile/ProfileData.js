import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { userService } from '../../service/user.service';
import Profile from './Profile';
import photo from './kacper.PNG';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop:'4rem'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',

  },
  image: {
    width: 300,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  padd: {
      paddingTop: '10rem'
  },
  padd2: {
    paddingTop: '5rem'
},
  
});

function ComplexGrid(props) {
  const { classes } = props;
  const nameData  = props.name
  const surnameData = props.surname
  const pointsData =props.points
  const currPointsData =props.currPoints

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="No nie Działa :)" src={photo} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography variant ="h1"className={classes.padd2} >
                   {nameData+ " " + surnameData}
                </Typography>
                <Typography variant ="h1" className={classes.padd}>
                     Liczba punktów: {pointsData}
                </Typography>
                <Typography variant ="h1" >
                     Liczba dostępnych punktów: 0 {currPointsData}
                </Typography>
    
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);