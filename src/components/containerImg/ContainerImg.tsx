import { ReactComponent as ManSvg } from "../../accept/svg/manSvg.svg";
import { ReactComponent as WomanSvg } from "../../accept/svg/womanSvg.svg";
import { ReactComponent as CoupleSvg } from "../../accept/svg/coupleSvg.svg";

const ContainerImg = () => {

    return (
        <section className="container-img">
            <div className="box-svg">
                <ManSvg className="orderSvg" />
                <WomanSvg className="orderSvg" />
            </div>
            <CoupleSvg />
        </section>
    )
}

export default ContainerImg;