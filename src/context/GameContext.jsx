import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {

    const [game, setGame] = useState({ user: "", room: 0, factor1: 12, factor2: 0 });

    const setGameUser = (username) => setGame((g) => ({ ...g, user: username }));
    const setGameRoom = (roomCode) => setGame((g) => ({ ...g, room: roomCode }));
    const setGameFactor1 = (factorValue1) => setGame((g) => ({ ...g, factor1: factorValue1 }));
    const setGameFactor2 = (factorValue2) => setGame((g) => ({ ...g, factor2: factorValue2 }));

    return (
        <GameContext.Provider value={{ game, setGameUser, setGameRoom, setGameFactor1, setGameFactor2 }}>
            {children}
        </GameContext.Provider>
    );
}