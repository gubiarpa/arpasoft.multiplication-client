import React from "react";

export const StartingPage = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle col-10 col-md-4">
            <form className="text-center">
                <input type="text" className="form-control text-center mt-3" placeholder="Your name here" />
                <button className="btn btn-outline-primary mt-3 col-12">
                    Go
                </button>
            </form>
        </div>
    );
}
