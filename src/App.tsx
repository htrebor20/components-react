import './App.sass'
import Button from './components/button'
import Card from './components/card'
import { faCoffee, faArrowTurnDown, faSpinner, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import Chip from './components/chip'
import Table from './components/table'
import { TableProps } from './components/table/types'


function App() {
  const fnCual = () => { console.log("asdasdad") }

const tableData: TableProps = {
  dataHead: [
    { id: "status", label: "Estado" },
    { id: "name", label: "Nombre" },
    { id: "created", label: "Creado" },
  ],
  content: [
    { status: "Borrador", name: "asdd", created: "12 days ago" },
    { status: "Borrador", name: "prueba modal 4", created: "21 days ago" },
    { status: "Borrador", name: "modelo conciliacion avanzada", created: "26 days ago" },
    { status: "Borrador", name: "prueb_alternativa1", created: "1 month ago" }
  ]
};

  return (

    <Table dataHead={tableData.dataHead} content={tableData.content} />
  )
}

export default App

