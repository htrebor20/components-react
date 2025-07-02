import './App.sass'
import Button from './components/button'
import Card from './components/card'
import { faCoffee, faArrowTurnDown, faSpinner, faFolderPlus, faClover, faBolt, faGear,faAngleDown, faXmark, faDatabase } from '@fortawesome/free-solid-svg-icons'
import Chip from './components/chip'
import { TableProps } from './components/table/types'
import StatusDot from './components/statusDot'
import Home1 from './pages/home'
import { ExpansionPanelProps } from './components/expansionPanel/types'
import ExpansionPanel from './components/expansionPanel'
import SideBar from './components/sidebar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Layout from './layaout'
import TitleModel from './modules/models/component/title'
import Table from './modules/models/component/table'
import Models from './modules/models'
import Select from './components/select'


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
          <Route path="models" element={<Models />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
