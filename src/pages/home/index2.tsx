import { icon } from "@fortawesome/fontawesome-svg-core"
import Button from "../../components/button"
import Card from "../../components/card"
import Table from "../../components/table"
import './pages.sass'
import './constants'

import { faRotateRight, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { TableProps } from "../../components/table/types"
import { infoTable, infoTable3 } from "./constants"
import StatusDot from "../../components/statusDot"
import Chip from "../../components/chip"

function Pages() {
    return (
        <div className="pages">
            <div className="top--section">
                <div className="title--wrapper--top">
                    <h1 className="bold">Inicio</h1>
                    <p>Encuentra la informacion mas relevante sobre tus modelos y asientos contables.</p>
                </div>

                <div className="title--wrapper">
                    <span>Ultima atualizacion 2025-04-09 112630GMT-5</span>
                    <Button
                        onClick={() => { }}
                        label="Atualizar"
                        buttonStyle="ghost"
                        icon={{ start: faRotateRight }}
                    />
                </div>
            </div>




            <div className="middle--section">
                <div className="left--section"                >

                    <Card>
                        <div>
                            <div className="display--between">
                                <div className="display--column">
                                    <span className="bold">Asientos</span>
                                    <span>Ultimos 30 dias</span>
                                </div>
                                <div className="align-button">
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
                                    <div className="display--column">
                                        <span>Asientos generados</span>
                                        <span>2</span>
                                        <div className="coarse-separator" />
                                    </div>
                                    <Table dataHead={infoTable.dataHead} content={infoTable.content}>
                                    </Table>
                                </Card>
                                <Card>
                                    <div className="display--column">
                                        <span>Asientos  alos que  aplico contavilizacion alternativa </span>
                                        <span className="bold">0</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="display--column">
                            <span>Asientos que requieren revision (acumulado historico) </span>
                            <div className="display--between">
                                <span>solicitud de anulacion pendiente</span>
                                <span>708</span>
                            </div>
                            <div className="dividing-line" />
                            <div className="display--between">
                                <span>Fallidos al generar asientos</span>
                                <span>6,555</span>
                            </div>
                            <div className="dividing-line" />
                            <div className="display--between">
                                <span>Fallidos al contabilizar en el ERP</span>
                                <span>3,900</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* section right ---------------------------------------*/}
                <div className="right--section">
                    <Card >
                        <div className="display--column">
                            <div className="display--between">
                                <div className="display--column">
                                    <span className="bold">Modelos</span>
                                    <span>Acumulado historico</span>
                                </div>

                                <div className="align-button">

                                    <Button onClick={() => { }}
                                        label="Ir a modelos contables"
                                        buttonStyle="secondary"
                                        size="s"
                                    />
                                </div>
                            </div>
                            <Card>
                                <div className="display--column">
                                    <span>Modelos creados</span>
                                    <span className="bold"> 1,203</span>
                                </div>
                                <div className="display-row">

                                    <Card>
                                        <div className="display-row" >
                                            <div className="display--column">
                                                <span>Producion</span>
                                                <span className="bold">105</span>
                                                <Chip label="0 nuevos en los ultimas 24 horas" chipStyle="secondary" size="s" icon={faExclamationTriangle} />
                                            </div>
                                            <Card>
                                                <div className="display-row display--between">
                                                    <StatusDot statusDotStyle="successes" label="Activos" />
                                                    <span>77</span>
                                                </div>
                                                <div className="dividing-line" />
                                                <div className="display-row display--between ">
                                                    <StatusDot statusDotStyle="error" label="Inactivos" />
                                                    <span>28</span>
                                                </div>
                                            </Card>
                                        </div>
                                    </Card>
                                    <div className="display-row">
                                        <Card>
                                            <div className="display--column">
                                                <span>prueba</span>
                                                <span className="bold">94</span>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div className="display--column">
                                                <span>Borrador</span>
                                                <span className="bold"> 1,004</span>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <span>Ultimos modelos creados</span>
                                <Table dataHead={infoTable3.dataHead} content={infoTable3.content}>
                                </Table>

                            </Card>
                        </div>
                    </Card>
                </div>

            </div >



        </div >

    )
}
export default Pages