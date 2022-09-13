import React, { useContext } from 'react'
import { getMembers, getQuestions } from "../services/getQuestions";

import { GameContext } from "../context/GameContext";
import { TitleForm } from "../components/TitleForm"
import { mainStyle } from "../Constants/DefinedClasses"

export const GameTrainingPage = () => {

    const { game } = useContext(GameContext);

    const { member1, member2 } = getMembers(game.factor1, game.factor2);

    return (
        <div className={mainStyle}>
            <TitleForm
                content={
                    <>
                        Be quick, <span className="text-capitalize">{game.user}</span>!
                    </>
                }
            />
            <div className="mt-5 border border-primary fs-1">
                {member1} x {member2}
            </div>
            <div className="mt-5 answers fs-4">
                {
                    getQuestions(member1, member2).map((answer, index) => (
                        <div key={index} className="option border mt-3 text-secondary">
                            {answer}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}