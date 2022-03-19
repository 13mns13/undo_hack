import React,{lazy, Suspense} from 'react'
import ReactDOM from 'react-dom'
import './base.css'

const App = lazy(()=>import("./App"))


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
        <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
