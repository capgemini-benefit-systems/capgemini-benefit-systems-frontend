import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    description: this.props.description,
  };

  handleChange = event => {
    this.setState({
      description: event.target.value,
    });
    this.props.callbackParent(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (

        <TextField style = {textFieldStyle}
          id="outlined-multiline-static"
          label="Add Description"
          multiline
          rows="22"
          placeHolder="Add Description"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          defaultValue={this.state.description}
        />
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);

const textFieldStyle = {
    width: '100%',
    height: '100%',
}