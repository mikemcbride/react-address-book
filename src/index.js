import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'
import Header from './components/Header.jsx'
import './css/bundle.min.css'

const Root = () => {
	return (
    <div>
      <Header />
      <App />
    </div>
	)
}

render(<Root/>, document.querySelector('#root'))