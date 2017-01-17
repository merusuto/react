import _ from 'lodash'
import { Model } from 'react-model'

export default class Unit extends Model {

  getRareStars() {
    return _.repeat('★', this.get('rare'))
  }

  getImageUrl(type) {
    return `/data/units/${type}/${this.id}.png`
  }
}
