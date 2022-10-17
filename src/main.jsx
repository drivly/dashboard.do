import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import 'simplebar-react/dist/simplebar.min.css'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
)
