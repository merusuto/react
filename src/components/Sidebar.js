import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

@enhanceWithClickOutside
export default class Sidebar extends Component {

  handleClickOutside = this.props.onClickOutside

  render() {
    return (
      <div className="content sidebar">
        <ul className="table-view">
          <li className="table-view-cell media">
            <a className="navigate-right" href="#/units">
              <span className="media-object pull-left icon icon-person"></span>
              <div className="media-body">
                同伴
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right" href="#/monsters">
              <span className="media-object pull-left icon icon-gear"></span>
              <div className="media-body">
                魔宠
              </div>
            </a>
          </li>
        </ul>
        <ul className="table-view">
          <li className="table-view-cell media">
            <a className="navigate-right" href="../gacha/">
              <span className="media-object pull-left icon icon-pages"></span>
              <div className="media-body">
                模拟抽卡
              </div>
            </a>
          </li>
          <li className="table-view-cell media">
            <a className="navigate-right" href="../desktop/">
              <span className="media-object pull-left icon icon-home"></span>
              <div className="media-body">
                桌面版
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
