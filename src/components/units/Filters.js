import React, { Component } from 'react'
import { Dropdown, SubDropdown, Item, Divider } from '../Dropdown'
import WithProps from '../WithProps'

export default class Filters extends Component {

  render() {
    const { filters, updateFilter } = this.props

    return (
      <WithProps className="filters" value={filters} onChange={updateFilter}>
        <Dropdown name="conditions" title="筛选">
          <SubDropdown name="rare" title="稀有度">
            <Item value={undefined} title="全部"/>
            <Item value={1} title="★"/>
            <Item value={2} title="★★"/>
            <Item value={3} title="★★★"/>
            <Item value={4} title="★★★★"/>
            <Item value={5} title="★★★★★"/>
            <Item value={[ 3,4,5 ]} title="★★★以上"/>
            <Item value={[ 4,5 ]} title="★★★★以上"/>
          </SubDropdown>
          <SubDropdown name="element" title="元素">
            <Item value={undefined} title="全部"/>
            <Item value={1} title="火"/>
            <Item value={2} title="水"/>
            <Item value={3} title="风"/>
            <Item value={4} title="光"/>
            <Item value={5} title="暗"/>
            <Item value={[ 1,2,3 ]} title="火/水/风"/>
            <Item value={[ 4,5 ]} title="光/暗"/>
          </SubDropdown>
          <SubDropdown name="weapon" title="武器">
            <Item value={undefined} title="全部"/>
            <Item value={1} title="斩击"/>
            <Item value={2} title="突击"/>
            <Item value={3} title="打击"/>
            <Item value={4} title="弓箭"/>
            <Item value={5} title="魔法"/>
            <Item value={6} title="铳弹"/>
            <Item value={7} title="回复"/>
            <Item value={[ 1,2,3 ]} title="斩/突/打"/>
            <Item value={[ 4,5,6 ]} title="弓/魔/铳"/>
          </SubDropdown>
          <SubDropdown name="type" title="成长">
            <Item value={undefined} title="全部"/>
            <Item value={1} title="早熟"/>
            <Item value={2} title="平均"/>
            <Item value={3} title="晚成"/>
          </SubDropdown>
          <SubDropdown name="aarea" title="攻击距离">
            <Item value={undefined} title="全部"/>
            <Item value={{ $max:50 }} title="近程"/>
            <Item value={{ $min:50,$max:150 }} title="中程"/>
            <Item value={{ $min:150 }} title="远程"/>
          </SubDropdown>
          <SubDropdown name="anum" title="攻击数量">
            <Item value={undefined} title="全部"/>
            <Item value={1} title="1体"/>
            <Item value={2} title="2体"/>
            <Item value={3} title="3体"/>
            <Item value={4} title="4体"/>
            <Item value={5} title="5体"/>
            <Item value={[ 2,3 ]} title="2/3体"/>
            <Item value={[ 4,5 ]} title="4/5体"/>
          </SubDropdown>
          <SubDropdown name="gender" title="性别">
            <Item value={undefined} title="全部"/>
            <Item value={1} title="不明"/>
            <Item value={2} title="男"/>
            <Item value={3} title="女"/>
          </SubDropdown>
          <SubDropdown name="country" title="国别">
          </SubDropdown>
          <Divider/>
          <Item value={undefined} title="重置" active={false}/>
        </Dropdown>
        <Dropdown name="sortMode" title="排序">
          <Item value="rare" title="稀有度"/>
          <Item value="dps" title="单体DPS"/>
          <Item value="mdps" title="多体DPS"/>
          <Item value="life" title="生命力"/>
          <Item value="atk" title="攻击"/>
          <Item value="aarea" title="攻击距离"/>
          <Item value="anum" title="攻击数量"/>
          <Item value="-aspd" title="攻击速度"/>
          <Item value="tenacity" title="韧性"/>
          <Item value="mspd" title="移动速度"/>
          <Item value="id" title="新品上架"/>
        </Dropdown>
        <Dropdown name="levelMode" title="等级">
          <Item value="zero" title="零觉零级"/>
          <Item value="maxlv" title="零觉满级"/>
          <Item value="mxlvgr" title="满觉满级"/>
        </Dropdown>
      </WithProps>
    )
  }
}
