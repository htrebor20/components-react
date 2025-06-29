import Pagination from "./component/pagination";
import Table from "./component/table";
import Title from "./component/title";
import './models.sass'

function Models() {
    return (
        <div className="models">
            <Title/>
            <Table/>
            <Pagination/>
        </div>
    )
}

export default Models