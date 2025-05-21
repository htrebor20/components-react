import './App.sass'
import Button from './components/button'
import Card from './components/card'
import { faCoffee, faArrowTurnDown, faSpinner } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>

      <Card
        state="disabled"
      >
        {
          <Button
            label='cascas'
            size='m'
            buttonStyle='danger'
            icon={{ start: faCoffee, end: faArrowTurnDown }}
            isLoading={false}
            isDisabled={true}
          />
        }
      </Card>
    </div>
  )
}

export default App
