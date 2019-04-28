import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
 
 
 
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});
 
class ProjectNameTextField extends React.Component {
  state = {
    name: this.props.name,
  };

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
    this.props.callbackParent(event.target.value);
  };
 
  render() {
    const { classes } = this.props;
 
    return (
      
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-uncontrolled"
          label={this.props.label}
          defaultValue={this.state.name}
          className={classes.textField}
          margin="normal"
          onChange={this.handleChange}
        />
 
      </form>
    );
  }
}
 
ProjectNameTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProjectNameTextField);