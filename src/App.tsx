import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Home from './pages/home'
import Layout from './layaout'
import TitleModel from './modules/models/component/title'
import Table from './modules/models/component/table'
import Models from './modules/models'
import Select from './components/select'
import Input from './components/input'
import CreateModel from './modules/createmodels';


export const sidebarIten: ExpansionPanelProps[] = [
  {
    label: 'home',
    icon: faBolt,
    isExpanded: true,
    functionExpansionPanel: () => console.log('Automatizar clicked'),
  },
    {
    label: 'models',
    icon: faBolt,
    isExpanded: true,
  }
]

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="models" element={<Models />} />
          <Route path="models/create" element={<CreateModel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

