import { put, debounce } from 'redux-saga/effects'
import axios from 'axios'
import types from '../types'
import { setSearchResults } from '../action';


function* setSearch({ value }) {
  try {
    const search = value
    const key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
    const limit = 20;
    const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

    const data = yield axios.get(url)

    return yield put(setSearchResults(data.data.data))
  } catch (e) {
    console.log(e)
  }
}

// debounce: run XX ms later
function* watchSearch() {
  yield debounce(500, types.watchGetSearchResults, setSearch)
}

export default watchSearch;