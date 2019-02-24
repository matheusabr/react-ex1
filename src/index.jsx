import React from 'react'
import ReactDOM from 'react-dom'

import Family from './components/family'
import Member from './components/member'

ReactDOM.render(
  <Family lastName={'Abreu'}>
    <Member name={'Matheus'} />
    <Member name={'Biel'} />
    <Member name={'Sosô'} />
  </Family>,
  document.getElementById('app')
)
