import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const StartingPage = () => {

    const {
        username = "",
        onInputChange
    } = useForm({
        username: ""
    });

    const isValidUser = () => username?.length >= 3;

    const handleClick = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
            <form className="text-center">
                <input
                    type="text"
                    className="form-control text-center mt-3"
                    placeholder="Your name here"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                <button
                    className="btn btn-outline-primary mt-3 col-12"
                    onClick={handleClick}
                    disabled={isValidUser() ? "" : "disabled"}
                >
                    Go
                </button>
            </form>
        </div>
    );
}
