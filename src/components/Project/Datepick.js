import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const styles = {
  grid: {
    width: '100%',
  },
};

class MaterialUIPickers extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: this.props.date,
  };

  handleChange = date => {
    this.setState({
      selectedDate: date,
    });
    this.props.callbackParent(this.state.selectedDate);
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label={this.props.label}
            value={selectedDate}
            onChange={this.handleChange}
          />

        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIPickers);