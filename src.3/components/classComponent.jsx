import React from 'react'

class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    // Using state
    this.state = {
      value: props.initialValue
    }
  }

  handleCalc(num) {
    // Updates component state
    this.setState({ ...this.state, value: this.state.value + num })
  }

  render() {
    const { value } = this.state
    const { label } = this.props
    return (
      <div>
        <h2>{label}</h2>
        <h3>{value}</h3>
        <button onClick={() => this.handleCalc(-1)}>-</button>
        <button onClick={() => this.handleCalc(1)}>+</button>
      </div>
    )
  }
}

export default ClassComponent
