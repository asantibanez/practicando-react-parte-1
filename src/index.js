import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import SumForm from './SumForm'

ReactDOM.render(
    <App message={'My Message Here'}/>,
    document.getElementById("root")
)

ReactDOM.render(
    <SumForm/>,
    document.getElementById("other-root")
)