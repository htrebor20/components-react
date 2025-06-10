import Chip from "../../../../components/chip";
import { TableProps } from "../../../../components/table/types";
import './rigntSection.sass'

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