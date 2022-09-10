import React from "react";

const SetupFactors = ({
    factor1 = 12, handleChangeFactor1 = () => { },
    factor2 = 12, handleChangeFactor2 = () => { } }) => {
        
    return (
        <>
            <div className="my-5">
                <label
                    className="form-label fs-2"
                >
                    Factor 1 <span className="fs-5 text-secondary">(hasta la tabla del {factor1})</span>
                </label>
                <input
                    type="range"
                    className="form-range fs-4"
                    min={2}
                    max={12}
                    onChange={handleChangeFactor1}
                    value={factor1}
                />
            </div>
            <div className="my-5">
                <label
                    className="form-label fs-2"
                >
                    Factor 2 <span className="fs-5 text-secondary">(hasta la tabla del {factor2})</span>
                </label>
                <input
                    type="range"
                    className="form-range fs-4"
                    min={9}
                    max={12}
                    onChange={handleChangeFactor2}
                    value={factor2}
                />
            </div>
        </>
    )
}

export default SetupFactors