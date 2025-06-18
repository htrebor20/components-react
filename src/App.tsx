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


export const expansionPanelList: ExpansionPanelProps[] = [
  {
    label: 'Automatizar',
    icon: faBolt,
    isExpanded: true,
    functionExpansionPanel: () => console.log('Automatizar clicked'),
    children: (
      <>
        <ExpansionPanel
          label="Subproceso 1"
          isExpanded={false}
          functionExpansionPanel={() => console.log('Subproceso 1 clicked')}
        />
        <ExpansionPanel
          label="Subproceso 2"
          isExpanded={false}
          functionExpansionPanel={() => console.log('Subproceso 2 clicked')}
        />
      </>
    ),
  },
  {
    label: 'Configurar',
    icon: faGear,
    isExpanded: false,
    functionExpansionPanel: () => console.log('Configurar clicked'),

  },
  {
    label: 'Integrar',
    icon: faClover,
    isExpanded: false,
    functionExpansionPanel: () => console.log('Integrar clicked'),
    children: (
      <>
        <ExpansionPanel
          label="Integración A"
          isExpanded={false}
          children={undefined}
          functionExpansionPanel={() => console.log('Integración A clicked')}
        />
        <ExpansionPanel
          label="Integración B"
          isExpanded={false}
          functionExpansionPanel={() => console.log('Integración B clicked')}
        />
      </>
    ),
  }
];


function App() {
  return (
    <SideBar listItem={expansionPanelList} />
  );
}

export default App;