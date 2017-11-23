import React from 'react'

export default (Component) => class extends React.Component {
  constructor() {
    super()

    this.state = {
      hovered: false,
    }
  }

  onMouseEnter = () => {
    this.setState({ hovered: true })
  }
  
  onMouseLeave = () => {
    this.setState({ hovered: false })
  }

  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <Component 
          {...this.props}
          hovered={this.state.hovered}
          />
      </div>
    )
  }
}