import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../../components/button"
import Card from "../../../../components/card"
import Chip from "../../../../components/chip"
import StatusDot from "../../../../components/statusDot"
import Table from "../../../../components/table"
import { infoTableCreateModules } from "./constants"
import './rigntSection.sass'
import { useGetCreatedModules } from "../../../../services/home"
import { Connect } from "vite"
import { reduceArray } from "./utilities"

function RightSection() {

    const createModules = useGetCreatedModules()
    reduceArray(createModules.data)

    return (
        <div className="layout">
            <Card >
                <div className="right--section" >
                    <div className="header-wrapper">
                        <div className="header-container">
                            <span className="bold">Modelos</span>
                            <span>Acumulado historico</span>
                        </div>
                        <Button onClick={() => { }}
                            label="Ir a modelos contables"
                            buttonStyle="secondary"
                            size="s"
                        />
                    </div>
                    <Card>
                        <div className="card-model-wrapper">
                            <span>Modelos creados</span>
                            <span className="bold"> 1,203</span>
                        </div>
                        <div className="card-section">
                            <Card>
                                <div className="card-1">
                                    <div className="content-card-1">
                                        <span>Producion</span>
                                        <span className="bold">105</span>
                                        <Chip label="0 nuevos en los ultimas 24 h" chipStyle="secondary" size="s" icon={faExclamationTriangle} />
                                    </div>
                                    <Card>
                                        <div className="car-status">
                                            <StatusDot statusDotStyle="successes" label="Activos" />
                                            <span>77</span>
                                        </div>
                                        <div className="dividing-line" />
                                        <div className="car-status">
                                            <StatusDot statusDotStyle="error" label="Inactivos" />
                                            <span>28</span>
                                        </div>
                                    </Card>
                                </div>
                            </Card>
                            <div className="card-mini">
                                <Card>
                                    <div className="content-card-mini">
                                        <span>prueba</span>
                                        <span className="bold">94</span>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="content-card-mini">
                                        <span>Borrador</span>
                                        <span className="bold"> 1,004</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <span>Ultimos modelos creados</span>
                        <Table dataHead={infoTableCreateModules.dataHead} content={ reduceArray(createModules.data)}>
                        </Table>

                    </Card>
                </div>
            </Card>
        </div>
    )
}

export default RightSection