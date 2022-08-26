import { Route, Routes } from "react-router-dom";
import { StartingPage } from "./pages/StartingPage";

function App() {
    return (
        <>
            <h1>Multiplicolas</h1>
            <Routes>
                <Route path="/" element={<StartingPage />} />
            </Routes>
        </>
    );
}

export default App;
