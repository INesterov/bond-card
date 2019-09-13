// @flow

import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const BondCard = lazy(() => import('./pages/BondCard'))

export default () => (
  <Router>
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path="/" component={BondCard} />
      </Switch>
    </Suspense>
  </Router>
)
