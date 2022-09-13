import React, { useState } from "react";
import { useEffect } from "react";

export const SetupFactors = ({ defaultFactor1, actionFactor1, defaultFactor2, actionFactor2 }) => {

    const [factor1, setFactor1] = useState(defaultFactor1);
    const [factor2, setFactor2] = useState(defaultFactor2);

    useEffect(() => {
        actionFactor1(factor1);
    }, [factor1]);

    useEffect(() => {
        actionFactor2(factor2);
    }, [factor2]);

    const handleChangeFactor1 = ({ target }) => {
        setFactor1(target.value);
        actionFactor1();
    }

    const handleChangeFactor2 = ({ target }) => {
        setFactor2(target.value);
        actionFactor2(target.value);
    }

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