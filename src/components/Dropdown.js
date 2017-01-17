import _ from 'lodash'
import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'
import classNames from 'classnames'

@enhanceWithClickOutside
export class Dropdown extends Component {

  state = { active: false }

  defaultProps = { disableOnClickOutside: true }

  toggleDropdown = () => {
    this.setState({ active: !this.state.active })
  }

  closeDropdown = () => {
    this.setState({ active: false })
  }

  handleClickOutside = event => {
    if (this.state.active) {
      event.preventDefault()
      this.closeDropdown()
    }
  }

  handleChange = (path, value) => {
    this.props.onChange(path, value)
    this.closeDropdown()
  }

  render() {
    const { name, title, value, children } = this.props
    const filterPath = [ name ]
    const activeValue = value[name]
    const onChange = this.handleChange
    const { active } = this.state

    return (
      <div className={classNames('dropdown pull-right', { active })}>
        <a className="btn btn-link dropdown-toggle" onClick={this.toggleDropdown}>
          {title}
        </a>
        <ul className="dropdown-menu">
          {
            React.Children.map(children, (element) =>
              React.cloneElement(element, { activeValue, onChange, filterPath })
            )
          }
        </ul>
      </div>
    )
  }
}

export class SubDropdown extends Component {
  render() {
    const { onChange, name, title, children } = this.props
    const filterPath = this.props.filterPath.concat([ name ])
    const activeValue = this.props.activeValue && this.props.activeValue[name]

    return (
      <li className="dropdown-submenu pull-left">
        <a>{title}</a>
        <ul className="dropdown-menu">
          {
            React.Children.map(children, (element) =>
              React.cloneElement(element, { activeValue, onChange, filterPath })
            )
          }
        </ul>
      </li>
    )
  }
}

export class Item extends Component {
  handleClick = () => {
    const { filterPath, value } = this.props
    this.props.onChange(filterPath, value)
  }

  render() {
    const { activeValue, value, title } = this.props
    const active = activeValue && _.isEqual(activeValue, value)

    return (
      <li className={classNames({ active })}>
        <a onClick={this.handleClick}>{title}</a>
      </li>
    )
  }
}

export class Divider extends Component {
  render() {
    return (<li className="divider"></li>)
  }
}
