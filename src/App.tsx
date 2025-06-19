import './App.sass'
import Button from './components/button'
import Card from './components/card'
import { faCoffee, faArrowTurnDown, faSpinner, faFolderPlus, faClover, faBolt, faGear } from '@fortawesome/free-solid-svg-icons'
import Chip from './components/chip'
import Table from './components/table'
import { TableProps } from './components/table/types'
import StatusDot from './components/statusDot'
import Home1 from './pages/home'
import { ExpansionPanelProps } from './components/expansionPanel/types'
import ExpansionPanel from './components/expansionPanel'
import SideBar from './components/sidebar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './layaout'

export const sidebarIten: ExpansionPanelProps[] = [
  {
    label: 'home',
    icon: faBolt,
    isExpanded: true,
    functionExpansionPanel: () => console.log('Automatizar clicked'),
  }
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
