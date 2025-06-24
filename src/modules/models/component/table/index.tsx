
import TableComp from "../../../../components/table";
import { useGetcharacterRick } from "../../../../services/models"
import { InfoAppRick } from "./utils";
import { infoTableCreateModules } from "./constants";

function Table() {
    const { data } = useGetcharacterRick()
    const rickCharacters = InfoAppRick(data?.results)
    return (
        <div>
            <TableComp content={rickCharacters} dataHead={infoTableCreateModules.dataHead} />
        </div>
    )
}

export default Table

