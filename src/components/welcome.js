import React, {Component} from "react"

class Welcome extends Component {
     render() {
          return <h1>Welcome {this.props.name} is old: {this.props.age} </h1>
     }
}

export default Welcome