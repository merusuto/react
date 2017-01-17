import React, { Component } from 'react'
import { connect } from 'react-redux'

import InfiniteScroll from '../InfiniteScroll'

@connect(state => ({ units: state.units, filters: state.filters }))
export default class Content extends Component {

  componentDidMount() {
    this.props.units.fetch()
  }

  renderUnit(unit, index) {
    const thumbnailUrl = `/data/units/thumbnail/${unit.get('id')}.png`

    return (
      <li key={index} className="table-view-cell media unit">
        <a href={`#/units/${unit.get('id')}`}>
          <img className="media-object pull-left" src={unit.getImageUrl('thumbnail')}/>

          <div className="media-body">
            <h4 className="media-title">
              {unit.get('name')} {unit.get('title')}
              <small>{unit.getRareStars()}</small>
            </h4>
            <div className="media-info-group">
              <p className="media-info">
                生命：<span id="life">{unit.get('life')}</span><br/>
                攻击：<span id="atk">{unit.get('atk')}</span><br/>
                攻距：{unit.get('aarea')}<br/>
                攻数：{unit.get('anum')}<br/>
              </p>
              <p className="media-info">
                攻速：{unit.get('aspd')}<br/>
                韧性：{unit.get('tenacity')}<br/>
                移速：{unit.get('mspd')}<br/>
                多段：{unit.get('hits')}<br/>
              </p>
              <p className="media-info hidden-xs">
                成长：{unit.get('type')}<br/>
                火：{unit.get('fire')}<br/>
                水：{unit.get('aqua')}<br/>
                风：{unit.get('wind')}<br/>
              </p>
              <p className="media-info hidden-sm">
                光：{unit.get('light')}<br/>
                暗：{unit.get('dark')}<br/>
                DPS：<span id="dps">{unit.get('dps')}</span><br/>
                总DPS：<span id="mdps">{unit.get('mdps')}</span><br/>
              </p>
            </div>
          </div>
        </a>
      </li>
    )
  }

  render() {
    const { units, filters } = this.props
    const { sortMode, conditions } = filters

    window.units = units

    const filterArgs = filters.conditions ?
      { attributes: _.omitBy(filters.conditions, _.isUndefined) } :
      {}

    const orderByArgs = sortMode &&
      _.startsWith(sortMode, '-') ?
        [`attributes.${_.trimStart(sortMode, '-')}`, 'asc'] :
        [`attributes.${sortMode}`, 'desc']

    const items = _.chain(units.models)
      .filter(filterArgs)
      .orderBy(...orderByArgs)
      .value()

    return (
      <InfiniteScroll
        items={items}
        itemHeight={93}
        itemRenderer={this.renderUnit}
        initialVisibleItemCount={10}
        />
    )
  }
}
