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
    width: '100%',
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
  props.props.map(user => (
    rows.push(createData(user.place, user.img, user.name, user.points))
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
