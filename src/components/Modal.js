import React, { Component } from 'react'
import classNames from 'classnames'

export default class Modal extends Component {

  handleClickOutside = this.props.onRequestClose

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  handleClickClose = event => {
    this.context.router.goBack()
  }

  render() {
    const { children } = this.props
    const active = !!children

    return (
      <div
        className={classNames('modal', { active })}
        >
        <a className="icon icon-close pull-right" onClick={this.handleClickClose}/>
        {children}
      </div>
    )
  }
}
