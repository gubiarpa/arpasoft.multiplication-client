import { Route, Routes } from "react-router-dom";
import { JoinPage } from "./pages/JoinPage";
import { MenuPage } from "./pages/MenuPage";
import { StartingPage } from "./pages/StartingPage";

function App() {
    return (
        <>
            <div className="m-3 text-center ">
                <div className="text-start">
                    <h1 className="title-game">Yan-Ken-Po!</h1>
                </div>
                <Routes>
                    <Route path="/" element={<StartingPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/join" element={<JoinPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
