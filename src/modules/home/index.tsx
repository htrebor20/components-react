import { layer } from "@fortawesome/fontawesome-svg-core";
import Title from "./component/title";
import LeftSection from "./component/leftSection";
import RightSection from "./component/rigntSection";
import './home.sass'
function HomeComponen() {
    return (
        <div className="home-componet">
            <Title />
            <div className="middle-section">
            <LeftSection />
            <RightSection />
            </div>
        </div>
    )
}
export default HomeComponen


