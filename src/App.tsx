import './App.sass'
import Button from './components/button'
import Card from './components/card'
import { faCoffee, faArrowTurnDown, faSpinner, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import Chip from './components/chip'
import Table from './components/table'
import { TableProps } from './components/table/types'
import StatusDot from './components/statusDot'
import Home1 from './pages/home'
import ExpansionPanel from './components/expansionPanel'


function App() {
  return (
    <div style={{ width: '80%', padding: '1rem' }}>
      <ExpansionPanel
        label="Automatizar"
        icon={faCoffee}
        isExpanded={false}
      >
        <ExpansionPanel
          label="relacion"
          icon={faFolderPlus}
          isExpanded={false}
        />
        <ExpansionPanel
          label="Soluciones"
          icon={faFolderPlus}
          isExpanded={false}
        >
          <ExpansionPanel
            label="rooooo"
            isExpanded={false}
          />
        </ExpansionPanel>


        <ExpansionPanel
          label="Soluciones"
          icon={faFolderPlus}
          isExpanded={false}
        >
          <div>
            <p>Plantillas</p>
            <p>Componentes</p>
          </div>
        </ExpansionPanel>
      </ExpansionPanel>
    </div>
  );
}

export default App;