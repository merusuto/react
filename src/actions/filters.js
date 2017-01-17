import { UPDATE_FILTER } from '../constants/filters'

export function updateFilter(path, value) {
  return { type: UPDATE_FILTER, path, value }
}
