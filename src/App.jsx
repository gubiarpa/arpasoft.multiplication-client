import { Route, Routes } from "react-router-dom";
import { StartingPage } from "./pages/StartingPage";

function App() {
    return (
        <>
            <div className="m-3">
                <h1>Multiplicolas</h1>
                <Routes>
                    <Route path="/" element={<StartingPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
