import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class MiniatureProject extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          image: "Tutej foto",
          name: "Java meeting",
          description:"Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer,Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer  " ,
          places: "2/7",
        };
      }
      
  render() {
    return (

      <div style = {ProjectStyle}> 
        <div>
          <NavLink style={naviStyle} exact to="/project">
            <div style ={photoStyle}>
              <h1>{this.state.image}</h1>
            </div>
            <div style={proTitle} >
              <h1>{this.state.name}</h1>
              <h1>Liczba Miejsc: {this.state.places}</h1>
            </div>
            <div style={proDesc} >
              <p>{this.state.description}</p>
            </div>
           </NavLink>
        </div>
      </div> 
    )
  }
}

const ProjectStyle = {
    borderStyle: 'solid',
    borderColor: '#c9c9c9',
    borderWidth: '2px',
    margin: '1rem 0rem 0rem 1rem',
    width: '33%',
    height:  '66%',
}

const naviStyle = {
    textAlign: 'center',
    textDecoration: 'none',
    color: '#ffffff',
  }

const photoStyle = {
    paddingTop:'10%',
    height:'80%',
    background: '#6a6a6a',
}

const proTitle = {
  color: 'black',
}

const proDesc= {
  color: 'black',
  whiteSpace: 'nowrap',  
  overflow: 'hidden',
  textOverflow: 'ellipsis', 
}