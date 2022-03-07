import React from 'react'
import * as ReactDOM from 'react-dom'

import { Home } from './windows/Home'

const option = {
  page: '',
  title: '',
}
window.location.search
  .substring(1)
  .split('&')
  .forEach((o) => {
    const [key, value] = o.split('=')
    key && (option[key] = decodeURIComponent(value))
  })

const render = (node: React.ReactElement) => {
  ReactDOM.render(node, document.getElementById('root'))
}
switch (option.page) {
  case 'home':
    render(<Home />)
}
