import { Collection } from 'react-model'
import Unit from '../models/Unit'

export default class Units extends Collection {
  model = Unit
  url = '/data/units.json'

}
