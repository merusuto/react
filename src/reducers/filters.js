import { UPDATE_FILTER } from '../constants/filters'
import _ from 'lodash'

const initialState = {}

export default function updateFilter(state = initialState, action) {
  const { type, path, value } = action

  switch (type) {
    case UPDATE_FILTER:
      return _.set(_.clone(state), path, value)
    default:
      return state
  }
}
