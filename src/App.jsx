import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LoggedUserLayout from "./AppLayouts/LoggedUserLayout/LoggedUserLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <LoggedUserLayout>
            <Home />
          </LoggedUserLayout>
        }
      />
    </Routes>
  );
}

export default App;
