import React from 'react'

class Field extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.initialValue
    }

    // Bind this to link the function to this component (Field)
    // when pass it to another component (eg. input component)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <label>{this.state.value}</label>
        <br />
        <input onChange={this.handleChange} value={this.state.value || ''} />
      </div>
    )
  }
}

export default Field
