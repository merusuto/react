import React, { Component } from 'react'

export default class WithProps extends Component {

  render() {
    const { className, children, ...otherProps } = this.props
    return (
      <div className={this.props.className}>
        {
          React.Children.map(this.props.children, child =>
            React.cloneElement(child, otherProps))
        }
      </div>
    )
  }
}
