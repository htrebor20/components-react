import { TableProps } from "./types"
import Button from "../button"
import './table.sass'

function Table({ content, dataHead }: TableProps) {
    return (
        <table className="table">
            <thead className="display">
                <tr className="row linea-divisoria">
                    {dataHead.map((item) => (<th className="item bold" key={item.id}>{item.label}</th>))}
                </tr>
                <tr>
                    <th colSpan={dataHead.length}>
                    </th>
                </tr>
            </thead>
            <tbody className="display">
                {content.map((row, rowIndex) => (<tr className="row linea-divisoria" key={rowIndex}> 
                    {dataHead.map((column) => (<td className="item" key={column.id}>{row[column.id]}</td>))}</tr>))}
            </tbody>
        </table>
    );
}

export default Table

