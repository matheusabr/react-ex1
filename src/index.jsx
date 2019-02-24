import React from 'react'
import ReactDOM from 'react-dom'

import Family from './components/family'
import Member from './components/member'

ReactDOM.render(
  <Family>
    <Member name='Matheus' lastName='Abreu' />
    <Member name='Biel' lastName='Abreu' />
    <Member name='Sosô' lastName='Abreu' />
  </Family>,
  document.getElementById('app')
)
