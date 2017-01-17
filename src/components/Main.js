import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import * as FilterActions from '../actions/filters'
import Sidebar from './Sidebar'
import Modal from './Modal'


@connect(state => ({ filters: state.filters }), FilterActions)
export default class Main extends Component {

  state = { sidebarActive: false }

  handleClickToggle = event => {
    this.setState({ sidebarActive: !this.state.sidebarActive })
  }

  handleClickOutsideSidebar = event => {
    if (this.state.sidebarActive) {
      event.stopPropagation()
      event.preventDefault()
      this.setState({ sidebarActive: false })
    }
  }

  render() {
    const { Content, Filters, Popup, params, filters, updateFilter } = this.props
    const { sidebarActive } = this.state

    return (
      <div className="main">

        <div className={classNames('content container', { 'sidebar-active': sidebarActive })}>
          <header className="bar bar-nav">
            <div className="input-icon input-search" style={{ display: 'none' }}>
              <span className="icon icon-search"></span>
              <input type="search" placeholder="Search"/>
              <a className="icon icon-close pull-right"></a>
            </div>

            <a ref="sidebarToggle" className="icon icon-bars pull-left" onClick={this.handleClickToggle}/>
            <a className="icon icon-search pull-right"/>

            { React.cloneElement(Filters, { filters, updateFilter }) }
          </header>

          { React.cloneElement(Content, { filters }) }
        </div>

        <Sidebar
          ref="sidebar"
          onClickOutside={this.handleClickOutsideSidebar}
          disableOnClickOutside={sidebarActive}
          />

        <Modal isOpen={!!params.id}>
          { params.id && Popup }
        </Modal>
      </div>
    )
  }
}
