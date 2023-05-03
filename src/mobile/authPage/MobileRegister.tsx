import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useRegisterMutation } from "../../store/authApi/authApi";
import { ReactComponent as ActiveStepIcon } from "../../accept/svg/activeStepIcon.svg";
import { ReactComponent as PassiveStepIcon } from "../../accept/svg/passiveStepIcon.svg";
import Button from "../../layout/Button";
import Input from "../../layout/Input";
import Select from "../../layout/Select";
import { age, kindMan, stepIcons } from "../../utils/utils";

import "./mobileRegister.scss";



const MobileRegister = () => {

    const [step, setStep] = useState(1)

    const { username, password, lookingFor, location, age: usersAge } = useAppSelector(state => state.userDataReducer)

    const [fetch, { isLoading, isError, data }] = useRegisterMutation()

    const handelSubmit = useCallback(() => {
        fetch({ username, password, site_key: "no01" })
    }, [fetch, password, username])

    const handelNextStep = () => {
        setStep(step + 1)
    }

    const handelBackStep = () => {
        setStep(step - 1)
    }

    useEffect(() => {
        if (data) {
            localStorage.setItem("access_token", data.Data.access_token)
        }
    }, [data])

    return (
        <section className="container-auth">
            <div className="wrapper">
                <h1 className="title">GET LOVELY CUTIES IN YOUR AREA!</h1>
                {step === 1 &&
                    <>
                        <Select
                            options={kindMan}
                            label="I am:"
                            placeholder="a man looking for a woman"
                            name="lookingFor"
                        />
                        <Button
                            title="next"
                            next={!lookingFor}
                            handelSubmit={handelNextStep}
                            isLoading={isLoading}
                            active={lookingFor ? "active" : ""}
                        />
                    </>
                }
                {step === 2 &&
                    <>
                        <Select
                            options={age}
                            label="My age:"
                            placeholder="select your age"
                            name="age"
                        />
                        <div className="nextOrBack">
                            <Button
                                title="back"
                                next={false}
                                handelSubmit={handelBackStep}
                                isLoading={isLoading}
                                active="active back"
                            />
                            <Button
                                title="next"
                                next={!usersAge}
                                handelSubmit={handelNextStep}
                                isLoading={isLoading}
                                active={usersAge ? "active" : ""}
                            />
                        </div>
                    </>
                }
                {step === 3 &&
                    <>
                        <Input
                            type="text"
                            firstTextInfo="E.g. New Roads or 70760"
                            secondTextInfo="We don’t use postal addresses to contact members directly!"
                            placeholder="city/village/town/region"
                            name="location"
                            label="My location:"
                        />
                        <div className="nextOrBack">
                            <Button
                                title="back"
                                next={false}
                                handelSubmit={handelBackStep}
                                isLoading={isLoading}
                                active="active back"
                            />
                            <Button
                                title="next"
                                next={!location}
                                handelSubmit={handelNextStep}
                                isLoading={isLoading}
                                active={location ? "active" : ""}
                            />
                        </div>
                    </>
                }
                {step === 4 &&
                    <>
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
                        <div className="nextOrBack">
                            <Button
                                title="back"
                                next={false}
                                handelSubmit={handelBackStep}
                                isLoading={isLoading}
                                active="active back"
                            />
                            <Button
                                title="next"
                                next={!username}
                                handelSubmit={handelNextStep}
                                isLoading={isLoading}
                                active={username ? "active" : ""}
                            />
                        </div>
                    </>
                }
                {step === 5 &&
                    <>
                        <Input
                            type="password"
                            placeholder="create your password"
                            name="password"
                            label="My password:"
                        />
                        <div className="nextOrBack">
                            <Button
                                title="back"
                                next={false}
                                handelSubmit={handelBackStep}
                                isLoading={isLoading}
                                active="active back"
                            />
                            <Button
                                title="start!"
                                next={!password}
                                handelSubmit={handelSubmit}
                                isLoading={isLoading}
                                active={password ? "active" : ""}
                            />
                        </div>
                    </>
                }
                <div className="step">
                    {stepIcons.map((item) => (
                        <div key={item}>
                            {step > item ? < ActiveStepIcon /> : <PassiveStepIcon />}
                        </div>
                    ))}
                </div>
                <p className="text-center">Already signed up? <span>Login</span></p>
            </div>

        </section>
    )
}

export default MobileRegister;