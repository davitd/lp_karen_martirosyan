import { memo, useEffect, useState } from "react";
import { useActions } from "../hooks/action";
import { ReactComponent as Visibility } from "../accept/svg/visibility.svg";

type MyInput = {
    type: string,
    name: string,
    value?: string,
    placeholder: string,
    label: string,
    firstTextInfo?: string,
    secondTextInfo?: string,
    message?: string | undefined,
}


const Input = ({
    type,
    placeholder,
    name,
    label,
    firstTextInfo,
    secondTextInfo,
    message
}: MyInput) => {

    const [state, setState] = useState("")
    const [isVisibility, setIsVisibility] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    const { setUserData } = useActions()

    const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setState(value)
        setErrorMessage("")
    }

    const handelBlur = () => {
        if (state) {
            setUserData({ name, value: state })
        }
        if (!state) {
            setErrorMessage("This is requeued")
        }
    }

    const handelVisibility = () => {
        setIsVisibility(!isVisibility)
    }

    useEffect(() => {
        if (message) {
            setErrorMessage(message)
        }
    }, [message])

    return (
        <div className="box-input">
            <label>
                {label}
            </label>
            <div>
                <input
                    type={isVisibility ? type : "text"}
                    className="input"
                    autoComplete="off"
                    name={name}
                    placeholder={placeholder}
                    onChange={handelChange}
                    onBlur={handelBlur}
                    value={state}
                />
                {
                    type === "password"
                    &&
                    <div className="visibility">
                        <Visibility
                            onClick={handelVisibility}
                        />
                        {isVisibility && <span />}
                    </div>


                }
                <p className="text-info"> {firstTextInfo} </p>
                <p className="text-info"> {secondTextInfo} </p>
                <p className="text-info message">{errorMessage}</p>
            </div>

        </div>

    )
}

export default memo(Input); 