import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AdmitPage } from "./pages/AdmitPage";
import { CreatePage } from "./pages/CreatePage";
import { JoinPage } from "./pages/JoinPage";
import { MenuPage } from "./pages/MenuPage";
import { StartingPage } from "./pages/StartingPage";
import { SetupTrainingPage } from "./pages/SetupTrainingPage";
import { UserProvider } from "./context/UserContext";

function App() {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/", { replace: true });
    }

    return (
        <UserProvider>
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
        </UserProvider>
    );
}

export default App;
