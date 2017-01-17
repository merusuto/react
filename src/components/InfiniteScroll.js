import _ from 'lodash'
import React, { Component } from 'react'

export default class InfiniteScroll extends Component {

  state = {
    visibleItemCount: this.props.initialVisibleItemCount
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items !== nextProps.items) {
      this.setState({ visibleItemCount: nextProps.initialVisibleItemCount })
      this.refs.container.scrollTop = 0
    }
  }

  handleScroll = () => {
    const { scrollTop } = this.refs.container
    const { visibleItemCount } = this.state
    const { itemHeight, initialVisibleItemCount } = this.props

    if (scrollTop > itemHeight * (visibleItemCount - initialVisibleItemCount)) {
      this.setState({ visibleItemCount: visibleItemCount + 10 })
    }
  }

  componentDidMount() {
    this.refs.container.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.refs.container.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { items, itemHeight, itemRenderer } = this.props
    const { visibleItemCount } = this.state

    return (
      <div ref="container" className="content">
        { _.isEmpty(items) ?
          <span className="icon icon-loading"></span> :
          <ul className="table-view" style={{ height: items.length * itemHeight }}>
            {_.chain(items).slice(0, visibleItemCount).map(itemRenderer).value()}
          </ul>
        }

        <a className="btn btn-lg scroll-to-top">
          <span className="icon icon-up"></span>
        </a>
      </div>
    )
  }
}
