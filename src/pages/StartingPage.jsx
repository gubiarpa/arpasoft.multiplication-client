import React, { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const StartingPage = () => {

    const inputRef = useRef();
    const navigate = useNavigate();

    const {
        username = "",
        onInputChange,
        setFieldState
    } = useForm({
        username: ""
    });

    useEffect(() => {
        setFieldState({ name: "username", value: localStorage.getItem("username") ?? "" });
        inputRef.current.select();
    }, []);

    const isValidUser = () => username?.length >= 3;

    const handleClick = (e) => {
        e.preventDefault();
        localStorage.setItem("username", username?.toLowerCase());
        navigate("/menu", { replace: true });
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
            <form className="text-center">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control text-center mt-3 text-lowercase fs-2"
                    placeholder="Your name here"
                    name="username"
                    value={username}
                    spellCheck={false}
                    onChange={onInputChange}
                />
                <button
                    className="btn btn-outline-primary mt-3 col-12 fs-3"
                    onClick={handleClick}
                    disabled={isValidUser() ? "" : "disabled"}
                >
                    Go
                </button>
            </form>
        </div>
    );
}
