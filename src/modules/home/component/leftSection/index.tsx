import Button from "../../../../components/button";
import Card from "../../../../components/card";
import Table from "../../../../components/table";
import { infoTable } from "./constants";
import './leftSection.sass'

function LeftSection() {
    return (
        <div className="left--section">
            <Card>
                <div>
                    <div className="header--grapper" >
                        <div className="title--grapper">
                            <span className="bold">Asientos</span>
                            <span>Ultimos 30 dias</span>
                        </div>
                        <div>
                            <Button
                                onClick={() => { }}
                                buttonStyle="secondary"
                                label="Ir al Gestor de asientos"
                                size="s"
                            />
                        </div>
                    </div>
                    <div className="wrapper--tables">
                        <Card>
                            <div className="table">
                                <span>Asientos generados</span>
                                <span>2</span>
                                <div className="coarse-separator" />
                            </div>
                            <Table dataHead={infoTable.dataHead} content={infoTable.content}>
                            </Table>
                        </Card>
                        <Card>
                            <div className="table--mini">
                                <span>Asientos  alos que  aplico contavilizacion alternativa </span>
                                <span className="bold">0</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="table--below">
                    <span>Asientos que requieren revision (acumulado historico) </span>
                    <div className="table--section">
                        <span>solicitud de anulacion pendiente</span>
                        <span>708</span>
                    </div>
                    <div className="dividing-line" />
                    <div className="table--section">
                        <span>Fallidos al generar asientos</span>
                        <span>6,555</span>
                    </div>
                    <div className="dividing-line" />
                    <div className="table--section">
                        <span>Fallidos al contabilizar en el ERP</span>
                        <span>3,900</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default LeftSection