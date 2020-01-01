import { fork, all } from 'redux-saga/effects'
import SearchSaga from '../components/Search/redux/SearchSaga'

function* RootSaga() {
  yield all([
    fork(SearchSaga)
    // fork(AnotherSaga)
  ])
}

export default RootSaga;