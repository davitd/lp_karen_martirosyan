import { FC, useCallback, useEffect } from "react";
import { useRegisterMutation } from "../../store/authApi/authApi";
import { age, kindMan } from "../../utils/utils"
import { useAppSelector } from "../../hooks/redux";
import Button from "../../layout/Button";
import Input from "../../layout/Input";
import Select from "../../layout/Select";

import "./register.scss";


const Register: FC = () => {

    const { username, password } = useAppSelector(state => state.userDataReducer)

    const [fetch, { isLoading, isError, data }] = useRegisterMutation()

    const handelSubmit = useCallback(() => {
        fetch({ username, password, site_key: "no01" })
    }, [fetch, password, username])

    useEffect(() => {
        if (data) {
            localStorage.setItem("access_token", data.Data.access_token)
        }
    }, [data])

    return (
        <section className="form-container">
            <h1 className="title">GET LOVELY CUTIES IN YOUR AREA!</h1>
            <div className="container-form">
                <Select
                    options={kindMan}
                    label="I am:"
                    placeholder="a man looking for a woman"
                    name="lookingFor"
                />
                <Select
                    options={age}
                    label="My age:"
                    placeholder="select your age"
                    name="age"
                />
                <Input
                    type="text"
                    firstTextInfo="E.g. New Roads or 70760"
                    secondTextInfo="We don’t use postal addresses to contact members directly!"
                    placeholder="city/village/town/region"
                    name="location"
                    label="My location:"
                />
                <div>
                    <Input
                        type="text"
                        placeholder="your email address"
                        name="username"
                        label="My email:"
                        message={
                            isError
                                ?
                                "Oops! There may be a mistake in your email address. Please check. If you've already signed up at our site, please use the login form."
                                :
                                ""}
                    />
                </div>
                <Input
                    type="password"
                    placeholder="create your password"
                    name="password"
                    label="My password:"
                />
                <Button
                    handelSubmit={handelSubmit}
                    isLoading={isLoading}
                    title="start!"
                />
            </div>
            <p className="text-center">Already signed up? <span>Login</span></p>
        </section>
    )
}

export default Register;