import { memo, useEffect, useState } from "react";
import { Loading } from "../components/loading/Loading";
import { useAppSelector } from "../hooks/redux";

type Submit = {
    handelSubmit: () => void
    isLoading: boolean | undefined
    title: string
    next?: boolean
    active?: string
}

const Button = ({ handelSubmit, isLoading, title, next = true, active }: Submit) => {

    const [isDisabled, setDisabled] = useState(true)

    const store = useAppSelector(state => state.userDataReducer)

    useEffect(() => {
        let result = true
        for (let item of Object.values(store)) {
            if (!item) {
                result = true
                break
            }
            result = false
        }
        setDisabled(result)
    }, [store])

    return (
        <button
            className={`submit ${active}`}
            onClick={handelSubmit}
            disabled={(isLoading || isDisabled) && next}
        >
            {isLoading ? <Loading /> : title}
        </button>
    )
}

export default memo(Button); 