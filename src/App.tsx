import './App.sass'
import Button from './components/button'
import { faCoffee, faArrowTurnDown, faSpinner } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <Button 
      label='cascas'
      size='m'
      buttonStyle='danger' 
      icon={{ start: faCoffee, end: faArrowTurnDown }} 
      isLoading ={false}
      isDisabled ={true}
      />
    </div>
  )
}

export default App