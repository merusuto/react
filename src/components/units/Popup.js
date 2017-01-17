import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect((state, props) => ({ unit: state.units.get(parseInt(props.params.id)) }))
export default class Filters extends Component {

  render() {
    const { unit } = this.props

    return (
      <div className="content">
        <div className="slider">
          <div className="slide-group">
            <div className="slide">
              <div className="image" style={{ backgroundImage: `url(${unit.getImageUrl('foreground')})` }}/>
            </div>
            <div className="slide media">
            </div>
          </div>
          <div className="slide-handler">
            <span className="icon icon-right-nav slide-next"></span>
            <span className="icon icon-left-nav slide-prev"></span>
          </div>
        </div>
      </div>
    )
  }
}
