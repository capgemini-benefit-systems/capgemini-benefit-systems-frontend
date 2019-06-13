import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { userService } from '../service/user.service';
import Popup from "reactjs-popup";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: "",
      isLoggedIn: false,
      awardsName: "",
      cost: "",
    };
  }

  componentDidMount() {
    if(localStorage.getItem('user') == null) {
      return
  }
  let user = JSON.parse(localStorage.getItem('user'))
  let userId = parseInt(user.accountId) + 1
    userService.getUser(userId)
    .then(
      user => {
        console.log(user)
        this.setState({
          name: user.name,
          surname: user.surname,
          isLoggedIn: true,
        })
      }
    )
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  logOutClicked = event => {
    userService.logout();
    window.location.reload();
  }

  handleSubmit = event => {
    event.preventDefault();
    const { awardsName, cost } = this.state;

    // stop here if form is invalid
    if (!(awardsName && cost)) {
        return;
    }

    userService.addAward(awardsName, cost)
      .then(award => { 
        this.createRows()
      }
        )
  }

  createData(cost, name) {
    return { cost, name };
  }
  
 createRows = event => {
  let rows = []
  var i = 1;
  var awards = []
  console.log("FFFFFF")
  console.log(awards)
  userService.getAllAwards()
          .then(data => {
           awards = data
           console.log(awards)
            })
  const { awardsName, cost } = awards;
  if (awards != undefined) {
    awards.map(award => (

      rows.push(cost, awardsName)
      ))
      console.log(rows)
    return rows
  }
}

  render() {
    var logout
    if(this.state.isLoggedIn) {
      logout = <NavLink onClick={this.logOutClicked} exact to="/login"> Logout </NavLink>
    } 

    let rows = this.createRows()
    var cells
    if (typeof rows != undefined) {
      cells = rows.map(row => (
        <TableRow key={row.cost}>
          <CustomTableCell align="left">{row.name}</CustomTableCell>
          <CustomTableCell align="right">{row.cost}</CustomTableCell>
          {/* <CustomTableCell align="right">{approveBtn}</CustomTableCell> */}
        </TableRow>
      ))
    } else {
      cells = <div></div>
    }

    return (
      <header style = {headerStyle}>
      <NavLink style={logoStyle} exact to="/home"> Benefit Systems </NavLink>
      <div  style={{float:'right'}} className="logo">
      <Popup trigger={<button> Awards</button>} position="left center">
        <div>
        <Popup trigger={<button> Add</button>} position="bottom center">
        <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="awardsName" bsSize="large">
            <Form.Label>Award's Name</Form.Label>
            <FormControl
              autoFocus
              type="text"
              value={this.state.awardsName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="cost" bsSize="large">
            <Form.Label>Points Cost</Form.Label>
            <FormControl
              value={this.state.cost}
              onChange={this.handleChange}
              type="numbers"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
          >
            Add
          </Button>
        </form>
        </div>
      </Popup>
      <Popup trigger={<button><NavLink exact to="/awards">Show</NavLink> </button>} position="bottom center">
        <div>
          
        <Paper>
      <Table>
        <TableBody>
        {cells}
        </TableBody>
      </Table>
      </Paper>

        </div>
      </Popup>
        </div>
      </Popup>
      <NavLink style={profileStyle} exact to="/profile"> {this.state.name + " " + this.state.surname} </NavLink>
      
      {logout}
      </div>
      </header>
    )
  }
}

const headerStyle = {
    background: '#fff',
    textAlign: 'left',
    padding: '1rem'
}
const logoStyle = {
  textAlign: 'left',
  color: '#3b90b2',
  textDecoration: 'none',
  
}
const profileStyle = {
  textAlign: 'right',
  textDecoration: 'none',
  color: 'black',
  marginRight: '3rem'
}

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