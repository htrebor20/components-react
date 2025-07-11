
import TableComp from "../../../../components/table";
import { useGetcharacterRick } from "../../../../services/models"
import { infoTableCreateModules } from "./constants";
import './table.sass'
import { useInfoAppRick } from "./utils";

function Table() {
    const { data } = useGetcharacterRick()
    const rickCharacters = useInfoAppRick(data?.results)
    return (
        <div className="table-container">
            <TableComp content={rickCharacters} dataHead={infoTableCreateModules.dataHead} />
        </div>
    )
}

export default Table

