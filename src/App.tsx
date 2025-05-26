import './App.sass'
import Button from './components/button'
import Card from './components/card'
import { faCoffee, faArrowTurnDown, faSpinner, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import Chip from './components/chip'


function App() {
  const fnCual = () => { console.log("asdasdad") }

  return (
    <Chip
      chipStyle='purple'
      size='m'
      shapes='rounded'
      label='ship label'
      icon={faFolderPlus}
      button={
        { onClick: fnCual }
      }
    />
  )
}

export default App
