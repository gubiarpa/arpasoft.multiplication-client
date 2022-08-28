import { Route, Routes } from "react-router-dom";
import { AdmitPage } from "./pages/AdmitPage";
import { CreatePage } from "./pages/CreatePage";
import { JoinPage } from "./pages/JoinPage";
import { MenuPage } from "./pages/MenuPage";
import { StartingPage } from "./pages/StartingPage";

function App() {
    return (
        <>
            <div className="m-3 text-center ">
                <div className="text-start">
                    <h1 className="title-game text-danger">Yan-Ken-Po!</h1>
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
                </Routes>
            </div>
        </>
    );
}

export default App;
