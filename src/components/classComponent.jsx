import React from 'react'

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Using class component!</h2>
        <span>{this.props.value}</span>
      </div>
    )
  }
}

export default ClassComponent
