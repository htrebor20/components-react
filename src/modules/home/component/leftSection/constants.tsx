import StatusDot from "../../../../components/statusDot";
import { TableProps } from "../../../../components/table/types";

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