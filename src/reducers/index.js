import { combineReducers } from 'redux'
import { createReducer } from 'react-model'

import filters from './filters'
import Units from '../collections/Units'

export default combineReducers({
  filters,
  units: createReducer(Units)
})
