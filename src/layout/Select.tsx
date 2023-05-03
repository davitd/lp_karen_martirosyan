import { memo, useState } from "react";
import { useActions } from "../hooks/action";
import { ReactComponent as Arrow } from "../accept/svg/arrow.svg";


type IProps = {
    options: string[],
    label: string,
    placeholder: string,
    name: string
}

const Select = ({ options, label, placeholder, name }: IProps) => {

    const [state, setState] = useState(placeholder)
    const [isOpen, setIsOpen] = useState(false)

    const { setUserData } = useActions()

    const handelClick = () => {
        setIsOpen(!isOpen)
        setUserData({ name, value: state })
    }

    return (
        <div className="box-input">
            <p>{label}</p>
            <div onClick={handelClick} className="input select">
                <p>{state}</p>
                <Arrow className={isOpen ? "revers" : ""} />
                {isOpen && (<div className="option">
                    {options.map((val, index) => (
                        <div
                            key={index}
                            onClick={() => setState(val)}
                        >
                            {val}
                        </div>
                    ))}
                </div>)}
            </div>
        </div>
    )
}

export default memo(Select) 