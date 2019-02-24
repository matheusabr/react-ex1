import React from 'react'
import ReactDOM from 'react-dom'

import Comp1 from './components/comp1'
import FirstComp, { SecondComp } from './components/multComp'

ReactDOM.render(
  <div>
    <Comp1 number={1} />
    <FirstComp />
    <SecondComp />
  </div>,
  document.getElementById('app')
)
