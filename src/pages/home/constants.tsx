import Chip from "../../components/chip"
import StatusDot from "../../components/statusDot"
import { TableProps } from "../../components/table/types"
import './pages.sass'

export const infoTable: TableProps = {
    dataHead: [
        { id: "status", label: "Estado del ERP" },
        { id: "quantity", label: "Cantidad" }
    ],
    content: [
        { status: <StatusDot
        statusDotStyle='successes'
        label = 'Contabilizados' />, quantity: '0'
        },
        { status: <StatusDot
        statusDotStyle='disabled'
        label = 'Por enviar' />, quantity: '2' },
        { status: <StatusDot
        statusDotStyle='error'
        label = 'uuufallidosu' />, quantity: '0' },
        { status: <StatusDot
        statusDotStyle='warning'
        label = 'En espera' />, quantity: '0' }
    ]
}

export const infoTable3: TableProps = {
    dataHead: [
        { id: "name", label: "Nombre" },
        { id: "create", label: "Creado" }
    ],
    content: [
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> asdd</span></div>, create: '12 day ago', },
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> Prueba modal 4</span></div>, create: '12 day ago', },
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> Prueba modal 3</span></div>, create: '21 day ago', },
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> Prueba modal 2</span></div>, create: '21 day ago', },
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> Prueba modal </span></div>, create: '21 day ago', },
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> modelo consiliacion abanzada</span></div>, create: '26 day ago', },
        { name:<div className="inline-content"> <Chip label="borrador" chipStyle="secondary" size="s" /> <span> Prueb_alternativa1 </span></div>, create: 'About 1 mount ago', },
       
    ]
}
