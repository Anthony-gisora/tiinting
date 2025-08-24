import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LoggedUserLayout from "./AppLayouts/LoggedUserLayout/LoggedUserLayout";
import CreatePost from "./components/homeComponents/CreatePost";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoggedUserLayout>
            <Home />
          </LoggedUserLayout>
        }
      />
      <Route
        path="/create"
        element={
          <LoggedUserLayout>
            <CreatePost />
          </LoggedUserLayout>
        }
      />
    </Routes>
  );
}

export default App;
