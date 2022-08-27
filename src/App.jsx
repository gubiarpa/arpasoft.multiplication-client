import { Route, Routes } from "react-router-dom";
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
                </Routes>
            </div>
        </>
    );
}

export default App;
