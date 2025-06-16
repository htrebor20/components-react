import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/button";
import './title.sass'
import { useEffect, useState } from "react";


function Title() {
    const getFullHours = (): string => {
        const date = new Date()
        const fullTime = date.toTimeString()
        const trimmedTime = fullTime.split(' (')[0]
        return trimmedTime
    }

    const [count, setcount] = useState(0)
    const [hours, setHours] = useState("")
    useEffect(
        () => {
            setHours(getFullHours())
        }, [])

    return (
        <div className="top--section title ">
            <div className="title--wrapper--top">
                <h1 className="bold">Inicio</h1>
                <p>Encuentra la informacion mas relevante sobre tus modelos y asientos contables.</p>
            </div>
            <div className="title--wrapper">
                <span>{`Ultima atualizacion ${hours}`}</span>
                <Button
                    onClick={() => {
                        setcount(count + 1)
                        setHours(getFullHours())
                    }
                    }
                    label="Atualizar"
                    buttonStyle="ghost"
                    icon={{ start: faRotateRight }}
                />
                <span data-testid="count-wraper">{count}</span>
            </div>
        </div>

    )
}
export default Title