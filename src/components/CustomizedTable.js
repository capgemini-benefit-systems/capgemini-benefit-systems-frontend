import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom'
import { Button} from "react-bootstrap";
import { userService } from '../service/user.service';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '95%',
    // marginTop: theme.spacing.unit * 3,
    marginRight: '1rem',
    overflowX: 'auto',
  },
  table: {
    minWidth: '4rem',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function createData(place, img, name, points, id) {
  return { place, img, name, points, id };
}

function createRows(props) {
  let rows = []
  var i = 1;
  if (props.users != undefined) {
    props.users.map(user => (
      rows.push(createData(i++, user.img, user.name + " " + user.surname, user.pointsSum, user.id))
      ))
    return rows
  }
}

function CustomizedTable(props) {
  const { classes } = props;
  let rows = createRows(props)

  var header = <TableRow >
  <CustomTableCell align="center">Signed Users</CustomTableCell>
  </TableRow>
  if(props.isRanking == true) {
    header = <TableRow >
    <CustomTableCell align="center"><NavLink exact to="/ranking">Ranking </NavLink></CustomTableCell>
    </TableRow>
  } 

  var cells
  if (rows != undefined) {
    let user = JSON.parse(localStorage.getItem('user'))
      let userId = parseInt(user.accountId) + 1
    if (props.activityId != undefined && userService.isProjectAdmin(props.projectId, userId)) {
      cells = rows.map(row => (
        <TableRow className={classes.row} key={row.place}>
          {/* <CustomTableCell align="left">{row.place}</CustomTableCell> */}
          {/* <CustomTableCell align="right">{row.img}</CustomTableCell> */}
          <CustomTableCell align="left">{row.name}</CustomTableCell>
          <CustomTableCell align="right">{row.points}</CustomTableCell>
          
          <CustomTableCell align="right">{
            <Button
              block
              bsSize="large"
              onClick={event => {
                userService.addPoints(props.activityId, row.id)
                userService.endActivity(props.activityId, row.id)
              }}
              type="submit"
              >
              +
            </Button>
  
          }</CustomTableCell>
        </TableRow>
      ))
    } else {
      cells = rows.map(row => (
        <TableRow className={classes.row} key={row.place}>
          {/* <CustomTableCell align="left">{row.place}</CustomTableCell> */}
          {/* <CustomTableCell align="right">{row.img}</CustomTableCell> */}
          <CustomTableCell align="left">{row.name}</CustomTableCell>
          <CustomTableCell align="right">{row.points}</CustomTableCell>
        </TableRow>
      ))
    }

    } else {
      cells = <div></div>
    }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
        {header}
        {cells}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
