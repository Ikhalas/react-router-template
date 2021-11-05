import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const { match } = this.props;
    const id = match?.params?.id;
    return (
      <div>
        Item {id}
      </div>
    )
  }
}

export default Item
