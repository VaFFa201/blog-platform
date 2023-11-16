import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import AppRouter from './components/AppRouter'
import * as fetchDataActions from './actions/fetchDataActions'

function App({ fetchData }) {
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(fetchDataActions, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
