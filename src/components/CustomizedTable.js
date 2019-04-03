import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    marginTop: theme.spacing.unit * 3,
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

function createData(place, img, name, points) {
  return { place, img, name, points };
}

function createRows(props) {
  let rows = []
  console.log(props.props)
  var i = 1;
  var tmp = [{"id":2,"email":null,"name":"Grzegorz","surname":"Tomasik","role":null,"pointsSum":9000,"currentPoints":null,"account":null,"transactions":[],"activityResults":[]},{"id":5,"email":null,"name":"Kacper","surname":"Jaros","role":null,"pointsSum":7392,"currentPoints":null,"account":null,"transactions":[],"activityResults":[]},{"id":4,"email":null,"name":"Michał","surname":"Bańka","role":null,"pointsSum":7372,"currentPoints":null,"account":null,"transactions":[],"activityResults":[]},{"id":1,"email":null,"name":"Jakub","surname":"Dereń","role":null,"pointsSum":5400,"currentPoints":null,"account":null,"transactions":[],"activityResults":[]},{"id":6,"email":null,"name":"Karolina","surname":"Madej","role":null,"pointsSum":5400,"currentPoints":null,"account":null,"transactions":[],"activityResults":[]}]
  tmp.map(user => (
    rows.push(createData(i++, user.img, user.name + " " + user.surname, user.pointsSum))
    ))
  return rows
}

function CustomizedTable(props) {
  const { classes } = props;
  let rows = createRows(props)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.place}>
              <CustomTableCell align="left">{row.place}</CustomTableCell>
              <CustomTableCell align="right">{row.img}</CustomTableCell>
              <CustomTableCell align="right">{row.name}</CustomTableCell>
              <CustomTableCell align="right">{row.points}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
