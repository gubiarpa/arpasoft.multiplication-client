import { Route, Routes } from "react-router-dom";

import { AdmitPage } from "./pages/AdmitPage";
import { CreatePage } from "./pages/CreatePage";
import { GameProvider } from "./context/GameContext";
import { JoinPage } from "./pages/JoinPage";
import { MenuPage } from "./pages/MenuPage";
import { SetupTrainingPage } from "./pages/SetupTrainingPage";
import { StartingPage } from "./pages/StartingPage";
import { useNavigate } from "react-router-dom";

function App() {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/", { replace: true });
    }

    return (
        <GameProvider>
            <div className="m-3 text-center ">
                <div className="text-start">
                    <h1 className="title-game text-danger" onClick={handleLogoClick}>
                        Yan-Ken-Po!
                    </h1>
                </div>
                <Routes>
                    <Route
                        path="/"
                        element={<StartingPage />}
                    />
                    <Route
                        path="/menu"
                        element={<MenuPage />}
                    />
                    <Route
                        path="/create"
                        element={<CreatePage />}
                    />
                    <Route
                        path="/join"
                        element={<JoinPage />}
                    />
                    <Route
                        path="/admit"
                        element={<AdmitPage />}
                    />
                    <Route
                        path="/setup-training"
                        element={<SetupTrainingPage />}
                    />
                </Routes>
            </div>
        </GameProvider>
    );
}

export default App;
