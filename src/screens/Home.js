import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        Home
        <br />
        <Link to="/item/id123">
          go to item
        </Link>
        <br />
        <Link to="/user">
          go to user
        </Link>
      </div>
    )
  }
}

export default Home
